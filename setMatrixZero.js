// Better Approach

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = [];
    let coll = [];

    let n = matrix.length;
    let m = matrix[0].length;

    for(let i = 0 ; i< n ; i++){
        for(let j = 0; j< m ; j++){
            if(matrix[i][j] === 0){
                row[i] = 1;
                coll[j] = 1;
            }
        }
    }

    for(let i = 0 ; i< n ; i++){
        for(let j = 0; j< m ; j++){
            if(row [i] || coll[j] ){
                matrix[i][j] = 0
            }
        }
    }
};

// Time complexity 2x(mxn) + space complexity (O(n) + O(m))

// Optimal Approach 

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let firstRowHasZero = false;
    let firstColHasZero = false;
    let n = matrix.length;
    let m = matrix[0].length;

    for(let i = 0 ; i<n; i++){
        if(matrix[i][0] === 0) firstRowHasZero = true;
    }

    for(let i = 0 ; i<m; i++){
        if(matrix[0][i] === 0) firstColHasZero = true;
    }


    for(let i = 1 ; i< n ; i++){
        for(let j = 1; j< m ; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1 ; i< n ; i++){
        for(let j = 1; j< m ; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0
            }
        }
    }

    if(firstRowHasZero){
        for(let i = 0 ; i<n; i++){
            matrix[i][0] = 0;
        }
    }

    if(firstColHasZero){
        for(let i = 0 ; i<m; i++){
            matrix[0][i] = 0;
        }
    }
};


