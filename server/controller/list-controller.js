import List from "../model/List.js";

//CREATE LIST
export const createList = async (req, res) => {
    if (req.user.isAdmin) {
        const newList = await new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(403).json("You are not allowed!")
    }
}

//DELETE LIST
export const deleteList = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const list = await List.findByIdAndDelete(req.params.id);
            res.status(201).json("List successfully deleted!");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!")
    }
}

//GET LIST
export const getList = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
try{    
    if (typeQuery) {
        if (genreQuery) {
             list = await List.aggregate([
                { $sample: { size: 10 } },
                { $match: { type: typeQuery, genre: genreQuery } }
            ]);
            res.status(200).json(list);
        } else {
             list = await List.aggregate([
                { $sample: { size: 10 } },
                { $match: { type: typeQuery } }
            ]);
            res.status(200).json(list);
        }
    } else {
         list = await List.aggregate([
            { $sample: { size: 10 } }
        ]);
        res.status(200).json(list);
    }
 }catch(err){
    res.status(500).json(err);
 }       
}