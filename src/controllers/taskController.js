const { json } = require('express');
const tasksModel = require('../models/taskModel')

const getAll = async (_request, response) => {
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks)

}

const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask);
};

const deleteTasks = async (request, response) => {
    const { id } = request.params;

    await tasksModel.deleteTasks(id);

    return response.status(204).json();
};

const updateTasks = async (request, response) => {
    const { id } = request.params;

    await tasksModel.updateTasks(id, request.body);

    return response.status(204).json();
};

module.exports = {
    getAll,
    createTask,
    deleteTasks,
    updateTasks
}