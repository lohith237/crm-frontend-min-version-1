import axiosInstance from "../../../services/axiosConfig";

export const getData = async ({ page, pageSize, search,status="" }) => {
    const res = await axiosInstance.get(`/users?page=${page}&page_size=${pageSize}&search=${search}&role=customer&status=${status}`);
    return res.data;
};

export const deleteData = async (id) => {
    return axiosInstance.delete(`/users${id}`);
};

export const saveOrUpdateData = async (data) => {
    return data?._id
        ? axiosInstance.patch(`/users/${data._id}`, data)
        : axiosInstance.post(`/users`,data);
};
export const bulkUploadUsers = async (file) => {
    const formData = new FormData();
    console.log(file)
    formData.append("file", file?.file);
    return axiosInstance.post(`/users/bulk-upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};
