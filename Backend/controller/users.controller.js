import User from "../models/users.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
    try {
        const { name, gender, clothes, bio, phone, email, password ,dob } = req.body;

        const existingUser = await User.findOne({
            $or: [{ email }, { phone }, { name }] 
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const createdUser = new User({
            name,
            email,
            phone,
            password: hashedPassword, 
            gender,
            clothes,
            bio,
            dob
        });

        await createdUser.save();
        res.status(200).json({ message: "User created successfully" ,user:{
            _id:createdUser._id,
            name:createdUser.name,
            email:createdUser.email,
        
        }
    });
    } catch (error) {
        if (error.response) {
            console.log("Error: " + error.message);
            alert("Error: " +error.response.data.message)
        }
        // res.status(500).json({ message: "Internal Server Error" });
    }
};


export const login = async (req, res) => {
    try {
        const { identifier, password } = req.body;

        const user = await User.findOne({
            $or: [
                { name: identifier },
                { email: identifier },
                { phone: identifier },
            ],
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid username, email, or phone" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.status(200).json({
            message: "Login Successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
