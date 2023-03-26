import connectDB from "../../middleware/mongoose";
import Test from "../../model/Test";
 const createIssue =  (arg1,arg2,arg3,arg4) => {
    const result = arg1 + arg2+arg3+arg4;
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
    console.log(arg4)
    console.log(result)
    let user = new Test({
        name: arg1,
        email: arg2,
        password: arg3,
        role: arg4,
    });
    user.save();
    return result;
};
export default connectDB(createIssue);
export { createIssue };
