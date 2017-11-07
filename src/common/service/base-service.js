import $ from 'jquery'

export default {
  get (url, params) {
    const dfd = $.Deferred() // 新建一个deferred对象
    const condition = params || {}
    $.get(url, condition).then((result) => {
      if (result.status === 0) {    // 状态status字段需要和后端约定好
        dfd.resolve(result) // 改变deferred对象的执行状态
      } else {
        dfd.reject(result)
      }
    }, (result) => {
      dfd.reject(result)
    })
    return dfd.promise() // 返回promise对象
  },
  post (url, params) {
    const dfd = $.Deferred() // 新建一个deferred对象
    const condition = params || {}
    $.post(url, condition).then((result) => {
      if (result.status === 0) {    // 状态status字段需要和后端约定好
        dfd.resolve(result) // 改变deferred对象的执行状态
      } else {
        dfd.reject(result)
      }
    }, (result) => {
      dfd.reject(result)
    })
    return dfd.promise() // 返回promise对象
  },
  postJSON (url, params) {
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
      if (data.status === 0) {    // 状态status字段需要和后端约定好
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
