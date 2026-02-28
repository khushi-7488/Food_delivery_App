import foodModel from "../models/foodModel.js";
import fs from 'fs';

//add food
const addFood = async (req, res) => {
    // let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        // image:image_filename
    })
    try {
        await food.save();
        res.status(200).json({ success: "Food added" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to add food" })
    }
}

//all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json(foods);
    } catch (error) {
        console.log(err);
        res.status(500).json({ error: "failed to fetch list of foods" })
    }
}

//to remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findByIdAndDelete(req.body.id);
        // fs.unlink(`uploads${food.image}`, () => { });

        if (!food) {
            res.status(400).json({ error: "food is not found" });
        }
        res.status(200).json({ success: "food is deleted successfully" });
    } catch (error) {
        console.log(err);
        res.status(500).json({ error: "failed to delete food" })
    }
}

export { addFood, listFood, removeFood };