function makeFriendsList(friends) {
    let newUl = document.createElement("ul")
    friends.forEach((item)=>{
        newUl.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`
    })
    return newUl
}
