//模拟querySeletor('.calss')
function searchElement(first) {
    function find(element) {
        if (Array.from(element.classList).includes(first)) {
            return element
        } else {
            const arr = Array.from(element.children)
            for (let index = 0; index < arr.length; index++) {
                return find(arr[index])
            }
        }
    }

    return find(document);
}