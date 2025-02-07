export const likeTask = (id, isLike) => {
    let likeArr =
        localStorage.getItem("likeArr") === null ? [] : JSON.parse(localStorage.getItem("likeArr"))
    if (likeArr?.includes(id)) {
        const newLikeArr = likeArr.filter((el) => el !== id)
        localStorage.setItem("likeArr", JSON.stringify(newLikeArr))
    } else {
        const newLikeArr = [...likeArr, id]
        localStorage.setItem("likeArr", JSON.stringify(newLikeArr))
    }
    return !isLike
}
