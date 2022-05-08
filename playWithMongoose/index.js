const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("can't connect to mongodb"))


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {

    const course = new Course({
        name: "semisenior trainning",
        author: "tawfik shalsh",
        tags: ["interesting readings", "funny", "science"],
        isPublished: true
    })

    const result = await course.save();

    console.log(result);
}

async function getCourses() {
    const courses = await Course.find({ name: /semi.*/ })//.limit(10).sort({name:1}).select({name:1, tags:1})
    console.log(courses)
}

async function countCourses() {
    const courses = await Course.find({ name: /semi.*/ }).count()//.limit(10).sort({name:1}).select({name:1, tags:1})
    console.log(courses)
}

async function updateCoursePublished(id) {
    const course = await Course.findById(id);
    if (!course) return;
    course.isPublished = true;
    const result = await course.save();
    console.log(result);
}

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });   //deleteMany to delete more than one
    console.log(result);
}
removeCourse('627275395c48d89aa2c1322f');