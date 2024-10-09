import axios from "axios";

const API_BASE_URL = 'https://aggie-study-45ef20d60435.herokuapp.com/resources';

export const getResources = () => {
    return axios.get(API_BASE_URL);
};

export const getResourcesByClassId = (classId) => {
    return axios.get(`${API_BASE_URL}/course/${classId}`);
}

export const getResourceById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

export const addResource = (resource) => {
    return axios.post(API_BASE_URL, resource);
};

export const updateResource = (id, resource) => {
    return axios.put(`${API_BASE_URL}/${id}`, resource);
};

export const deleteResource = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};