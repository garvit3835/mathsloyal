import createIssue from "./issue/createIssue"
import getIssue from "./issue/getIssue"
import assignIssue from "./issue/assignIssue"
import createSolution from "./solution/createSolution"
// import findSolution from "./solution/findSolution"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = await assignIssue(req.body.issueId, req.body.tutorId)
        res.status(200).json(data)
    } else {
        res.status(400).json({message: "Method not allowed!"})
    }
    
    // let data = await getIssue("641d636d09113c8ef3cc41d9")
    // let data = await createSolution("641d636d09113c8ef3cc41d4", "def.jpg", "this is how it is done", "641d636d09113c8ef3cc41d9") 
    

}