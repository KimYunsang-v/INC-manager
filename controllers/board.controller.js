const Board=require('../models/board.model');

//게시판에 정보 저장
exports.join= (req, res) => {
    console.log("======inc/board/======post");
    console.log(req.body.id);
    console.log(req.body.title);
    console.log(req.body.message);
    console.log(req.body.writer);
    let board = new Board(
        {
            id: req.body.id,
            title: req.body.title,
            date: req.body.date,
            message: req.body.message,
            writer: req.body.writer,
        }
    );

    board.save().then(() => res.status(200))
        .catch(e => res.status(400));
};

//게시판 리스트 추출(status, id, title, date)
exports.list = (req, res) => {
    console.log("======inc/board/======get");
    Board.find({})
        .then(boards => {
            if (!boards.length) return res.status(404).send({err:'Boards not found'});
            res.send(boards);
        })
        .catch(err => res.status(500).send(err));
};