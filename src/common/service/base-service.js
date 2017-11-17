import $ from 'jquery'

export default {
  get(url, params) {
    const dfd = $.Deferred()
    // 新建一个deferred对象
    const condition = params || {}
    // 参数的赋值
    $.get(url, condition).then((result) => {
      // $.get()返回一个deferred对象所以可以使用then()方法，里面包含请求成功和失败两个回调函数
      if (result.status === 0) {
        // 与后端约定好的返回状态值status为0即表明请求到正确的结果
        dfd.resolve(result)
        // 手动改变deferred对象的执行状态为已成功
      } else {
        // 如果状态值不为0，就表名请求到了错误的结果
        dfd.reject(result)
        // 手动改变deferred对象的执行状态为已失败
      }
    }, (result) => {
      // 请求失败的回调函数里面，直接就改变deferred对象的执行状态为已失败
      dfd.reject(result)
    })
    return dfd.promise()
    // 上面的操作已经从请求状态上更改了deferred对象的执行状态，为了防止外部再去修改deferred对象的执行状态，就要返回promise对象，禁止外部修改
  },
  post(url, params) {
    const dfd = $.Deferred() // 新建一个deferred对象
    const condition = params || {}
    $.post(url, condition).then((result) => {
      if (result.status === 0) {
        dfd.resolve(result) // 改变deferred对象的执行状态
      } else {
        dfd.reject(result)
      }
    }, (result) => {
      dfd.reject(result)
    })
    return dfd.promise() // 返回promise对象
  },
  // 相比上面的post，此方法是传递一个json字符串到后端处理，区别在于后端的需要，后端需要传递字符串就用postJSON，需要键值对就用post
  postJSON(url, params) {
    const dfd = $.Deferred() // 新建一个deferred对象
    const condition = params || {}
    $.ajax({
      url,
      type: 'POST',
      data: JSON.stringify(condition),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).then((data) => {
      // console.log(data, textStatus, jqXHR);
      if (data.status === 0) {
        dfd.resolve(data) // 改变deferred对象的执行状态
      } else {
        dfd.reject(data)
      }
    }, (result) => {
      dfd.reject(result)
    })
    return dfd.promise() // 返回promise对象
  }
}
