exports.getALlJobs = async(req, res) => {
    res.send("All Jobs");
}

exports.getJob = async(req, res) => {
    res.send("get a Job");
}

exports.createJob = async(req, res) => {
    res.send("create Job");
}

exports.updateJob = async(req, res) => {
    res.send("udpate Job");
}

exports.deleteJob = async(req, res) => {
    res.send("delete Jobs");
}
