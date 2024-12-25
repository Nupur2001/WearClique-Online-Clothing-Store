import User from "../models/users.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
    try {
        const { name, gender, clothes, bio, phone, email, password } = req.body;

        // Check if a user with the same email or phone already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { phone }, { name }] // Check for existing email or phone
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create the new user
        const createdUser = new User({
            name,
            email,
            phone,
            password: hashedPassword, // Store the hashed password
            gender,
            clothes,
            bio
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

        // Find the user by name, email, or phone
        const user = await User.findOne({
            $or: [
                { name: identifier },
                { email: identifier },
                { phone: identifier },
            ],
        });

        // Check if the user exists
        if (!user) {
            return res.status(400).json({ message: "Invalid username, email, or phone" });
        }

        // Compare the password
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Respond with success
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



// export const login = async (req, res) => {
//     try {
//         const { name, email, password, phone } = req.body
//         const user = await User.findOne({ name, email, phone });
//         const isMatch =await bcryptjs.compare(password, user.password)
//         if (!user || !isMatch) {
//             return res.status(400).json({ message: "Invalid username,email,phone or password" })
//         }
//         else {
//             res.status(200).json({
//                 message: "Login Successful", user: {
//                     _id: user._id,
//                     name: name,
//                     email: email,
//                     phone: phone
//                 }
//             })
//         }
//     } catch (error) {
//         console.log("Error"+ error.message)
//         res.status(500).json({message:"Internal Server Error"})
//     }
// }