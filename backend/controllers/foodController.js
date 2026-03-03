import foodModel from "../models/foodModel.js";
import fs from 'fs';

//add food
const addFood = async (req, res) => {
    let image_filename = req.file ? req.file.filename : null;
    if (!image_filename) {
        return res.status(400).json({ success: false, message: "No image file uploaded." })
    }

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })
    try {
        await food.save();
        res.json({ success: "true", message: "food added successfully" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, mesage: "Error adding food." })
    }
}

//all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error listing foods" })
    }
}

//to remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { });

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food item removed successfully" })
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error removing food item"})
    }
}

export { addFood, listFood, removeFood };