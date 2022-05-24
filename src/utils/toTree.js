export default function toTree() {
    const result = []
    let temp = []
    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i][arguments[3]] === arguments[1]) {
            const obj = arguments[0][i]
            temp = toTree(arguments[0], arguments[0][i][arguments[2]], arguments[2], arguments[3])
            if (temp.length > 0) {
                obj.children = temp
            }
            result.push(obj)
        }
    }
    return result
}