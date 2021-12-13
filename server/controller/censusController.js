const Census = require('../model/censusModel');
const Code = require('../model/codeModel');
var moment = require('moment');

// mở một cuộc điều tra dân số
const openCensus = async (req, res) => {
    const { timeClose, timeOpen, opener, statusCensus, codeArea} = req.body;
    try {
        // kiểm tra xem thời gian đóng và thời gian mở có hợp lệ không
        if (timeClose < timeOpen) {
            return res.json({
                status: false,
                message: "Thời gian mở cuộc khảo sát không hợp lệ",
                messageDetail: "Thời gian mở cuộc khảo sát bắt buộc phải nhỏ hơn thời gian kết thúc cuộc khảo sát, nhưng bạn lại để nó lớn hơn.",
            })
        }
        if (timeClose < Date.now()) {
            return res.json({
                status: false,
                message: "Thời gian kết thúc khảo sát không hợp lệ",
                messageDetail: "Thời gian kết thúc cuộc khảo sát bắt buộc phải lớn hơn thời gian hiện tại.",
            })
        }

        // sau khi kiểm tra xong sẽ lưu vào database
        const census = new Census({
            timeClose, timeOpen, opener, statusCensus, codeArea
        })
        const newCensus = await census.save();
        res.send({
            status: true,
            message: "Cuộc khảo sát dân số được mở thành công.",
            data: newCensus,
        })

    } catch (err) {
        res.status(500).json({ err});
    }
} 

module.exports = {
    openCensus,
}