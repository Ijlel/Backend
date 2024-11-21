// // Import model
import Product from '../models/product.model.js'
import handleError from '../middlewares/errors/handleError.js'

// // Example to create a new example
const createProduct = async (req, res) => {
    try {
        // Check if an Product with the same name already exists
        const existingProduct = await Product.findOne({ name: req.body.name });

        if (existingProduct) {
            return handleError(res, null, "Product with this name already exists", 409); // 409 Conflict
        }

        const newProduct = new Product(req.body);
        await newProduct.save();
        return res.status(201).json({ payload: newProduct });
    } catch (error) {
        handleError(res, error, "Error in creating Product", 500);
    }
};

// // Get a single example by ID
const getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return handleError(res, null, "No Product found", 404); // 404 Not Found
        }

        return res.status(200).json({ payload: product });
    } catch (error) {
        handleError(res, error, "Error in getting one Product", 500); // 500 server error
    }
};

// // Get all examples
const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();

        if (product.length === 0) {
            return res.status(204).send(); // No content
        }

        return res.status(200).json({ payload: product });
    } catch (error) {
        handleError(res, error, "Error in getting all Product", 500);
    }
};

// // Update an example by ID
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!product) {
            return handleError(res, null, "No data found", 404);
        }

        return res.status(200).json({ payload: product });
    } catch (error) {
        handleError(res, error, "Error in updating Product", 500);
    }
};

// // Delete an example by ID
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return handleError(res, null, "No Product found", 404);
        }

        return res.status(200).json({ payload: "Product deleted" });
    } catch (error) {
        handleError(res, error, "Error in deleting Product", 500);
    }
};


const productController = {createProduct,getOneProduct,getAllProduct,deleteProduct,updateProduct}

export default productController