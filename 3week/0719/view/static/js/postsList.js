$(document).ready(() => {
  $.ajax({
    methods: 'GET',
    url: 'http://localhost:8080/posts/',
    success: (res) => {
      res.map((it, index) => {
        console.log(it)
        console.log(index)

        let listData = `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${it.title}</td>
            <td>elice</td>
            <td>
              <button type="button" class="btn btn-danger">delete</button>
              <button type="button" class="btn btn-warning">update</button>
            </td>
          </tr>
        `
        $(".postsList").append(listData);
      })
    }
  })
})