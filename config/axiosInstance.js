const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'http://20.244.56.144/evaluation-service/stocks',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDMyNTc5LCJpYXQiOjE3NDcwMzIyNzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjY3MjUyOTAyLWEzZGItNGRlZi05Y2JhLTlhZWRmMWEzYzM5MyIsInN1YiI6InNhbmRlZXBuLjIyYWlkQGtvbmd1LmVkdSJ9LCJlbWFpbCI6InNhbmRlZXBuLjIyYWlkQGtvbmd1LmVkdSIsIm5hbWUiOiJzYW5kZWVwIG4iLCJyb2xsTm8iOiIyMmFkcjA5MSIsImFjY2Vzc0NvZGUiOiJqbXBaYUYiLCJjbGllbnRJRCI6IjY3MjUyOTAyLWEzZGItNGRlZi05Y2JhLTlhZWRmMWEzYzM5MyIsImNsaWVudFNlY3JldCI6InZzQWt0QVpOUnV0bXBFZ1cifQ.am3a8ZtCWzzqFUeK2oEnMzMFuIzbs2-Rsl7ll7myI6Q'
    }
});

module.exports = axiosInstance;
