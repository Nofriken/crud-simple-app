import { request, response } from "express";
import Product from "../model/product_model";

// add new product
export const addProduct = async (req = request, res = response) => {
  const { name, price, amount, expired } = await req.body;
  const newProduct = await new Product({
    name,
    price,
    amount,
    expired,
  });

  try {
    const displayData = await newProduct.save();

    res.status(201).json({
      data: {
        product: displayData,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// get all data
export const get_AllData = async (req = request, res = response) => {
  try {
    const displayData = await Product.find();

    res.status(200).json({
      success: true,
      status: 200,
      data: {
        product: displayData,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

// get user by id
export const get_byId = async (req = request, res = response) => {
  try {
    const data = await Product.findById({
      _id: req.params.id,
    });

    res.status(200).json({
      success: true,
      data: {
        product: data,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

// delete
export const deleteData = async (req = request, res = response) => {
  try {
    const data = await Product.deleteOne({
      _id: req.params.id,
    });

    res.status(200).json({
      success: true,
      message: "Data Berhasil Terhapus",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// update data
export const updateData = async (req = request, res = response) => {
  const dataProduct = await req.body;
  try {
    const data = await Product.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    );
    res.status(200).json({
      success: true,
      data: data,
      msg: "Data Berhasil di Updated",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};
