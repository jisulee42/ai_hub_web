const Header = () => {
  return (
    // <header>
    //   <a href={"/"}>Home</a><br/>
    //   <a href={"/contact"}>contact</a><br/>
    //   <a href={"/about"}>about</a><br/>
    //   <a href={"/page/2"}>page</a><br/>
    // </header>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href={"/"} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href={"#bootstrap"}></use></svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href={"/"} class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href={"/contact"} class="nav-link">Contact</a></li>
        <li class="nav-item"><a href={"/about"} class="nav-link">About</a></li>
        <li class="nav-item"><a href={"/page/2"} class="nav-link">Page</a></li>
        {/* <li class="nav-item"><a href="#" class="nav-link">About</a></li> */}
      </ul>
    </header>
  )
}

export default Header;