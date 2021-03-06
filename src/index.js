
// You should implement your task here.

    module.exports = function towelSort (matrix) {
    let res = [];

    if(matrix === undefined) {
        return res;
    }

    for(let i = 0; i < matrix.length; ++i) {
        for(let j = 0; j < matrix[i].length; ++j) {
            res.push(i % 2 === 0 ? matrix[i][j] : matrix[i][matrix[i].length - j - 1]);
        }
    }

    return res;
}

