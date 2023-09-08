const isValid=function(value){
    if(typeof value === "undefined"|| typeof value === null){
        return false;
    }
    if(typeof value.trim().length == 0){
        return false;
    }
    if(typeof value === "string" && value.trim().length > 0){
        return true;
    }
};
const isValidBody = function(requestBody){
    return Object.keys(requestBody).length >0;
};
module.exports = {isValid , isValidBody};