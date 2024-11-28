
import Category from '../models/category.model.js'
import handleError from '../middlewares/errors/handleError.js'


const createCategory = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
          return handleError(res, null, "You must create at least one attribute", 400); // base request
        }
        // Check if an category with the same name already exists
        const existingcategory = await Category.findOne({ name: req.body.name });

        if (existingcategory) {
            return handleError(res, null, "This category  already exists", 409); // 409 Conflict
        }

        const newcategory = new Category(req.body);
        await newcategory.save();
        return res.status(201).json({ payload: newcategory });
    } catch (error) {
        handleError(res, error, "Error in creating category backend", 500);
    }
}

// Get a single category by ID
const getOneCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return handleError(res, null, "No category found", 404); // 404 Not Found
        }

        return res.status(200).json({ payload: category });
    } catch (error) {
        handleError(res, error, "Error in getting one category", 500); // 500 server error
    }
};

// // Get all categorys
const getAllCategory = async (req, res) => {
    try {
        const categorys = await Category.find();

        if (categorys.length === 0) {
            return res.status(204).send(); // No content
        }

        return res.status(200).json({ payload: categorys });
    } catch (error) {
        handleError(res, error, "Error in getting all categorys", 500);
    }
};

// // Update an category by ID
const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!category) {
            return handleError(res, null, "No data found", 404);
        }

        return res.status(200).json({ payload: category });
    } catch (error) {
        handleError(res, error, "Error in updating category", 500);
    }
};

// // Delete an category by ID
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return handleError(res, null, "No category found", 404);
        }

        return res.status(200).json({ payload: "category deleted" });
    } catch (error) {
        handleError(res, error, "Error in deleting category", 500);
    }
};

const categoryController = {createCategory,getOneCategory, getAllCategory,updateCategory, deleteCategory}

export default categoryController