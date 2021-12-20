const Mail = require('../model/mailModel');


// tạo một mail
const createMail = async (req, res) => {
    const {title, content, sender, receiver} = req.body;
    try {
        const newMail = new Mail({title, content, sender, receiver});
        const mail = await newMail.save();
        res.json({
            status: true,
            message: "Tạo thành công.",
            data: mail,
        })
        
    } catch (err) {
        res.status(500).json({err});
    }
}

// xóa một mail
const deleteMail = async (req, res) => {
    const deleteId = req.userId; // deleteId là id của người xóa
    const { mailId } = req.body;
    try {
        const mail = await Mail.findById({_id: mailId});
        // nếu user là người gửi hoặc người nhận thì mới có quyền xóa
        await mail.updateOne({$push: {deleted: deleteId}});
        return res.json({
            status: true,
            message: "Xóa thành công.",
        })
    } catch (err) {
        res.status(500).json({err});
    }
}

// lấy tất cả mail của 1 người gửi và nhận
const getAllMail = async (req, res) => {
    const userId = req.userId;
    const listMail = [];
    try {
        const mails = await Mail.find();
        mails.forEach((mail) => {
            if (mail.sender === userId ||  mail.receiver.includes(userId)) {
                if (!mail.deleted.includes(userId)) {
                    listMail.push(mail);
                }
            }
        })
        if (listMail.length > 0) {
            return res.status(200).json({
                status: true,
                data: listMail,
            })
        } else{
            return res.json({status: false, message: "Bạn không có email nào."})
        }
    } catch (err) {
        res.status(500).json({err});
    }
}

// update watched mail
const updateWatched = async (req, res) => {
    
    const userId = req.userId;
    const { mailId } = req.body;

    try {
        const mail = await Mail.findById({_id: mailId});
        console.log(mail);
        // nếu user là người gửi hoặc người nhận thì mới có quyền xem
        await mail.updateOne({$push: {watched: userId}});
        return res.json({
            status: true,
            message: "Thành công.",
        })
    } catch (err) {
        res.status(500).json({err});
    }
}

module.exports = {
    createMail,
    deleteMail,
    getAllMail,
    updateWatched,
}