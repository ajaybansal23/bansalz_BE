const ceremonies = (req, res) => {
    console.log("sending response to ----> UI");
    // req.app.set('user', res.req.user)
    res.send({ name: "Ajay" });
};

module.exports = {
    ceremonies
}