import React from "react";

function Navbar (){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">IT-Poly</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">หน้าแรก</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">เกี่ยวกับ</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        หลักสูตร
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">ปวช.เทคโนโลยีสารสนเทศ</a></li>
                        <li><a class="dropdown-item" href="#">ปวช.คอมพิวเตอร์โปรแกรมเมอร์</a></li>
                        <li><a class="dropdown-item" href="#">ปวส.เทคโนโลยีสารสนเทศ</a></li>
                        <li><a class="dropdown-item" href="#">ปวส.คอมพิวเตอร์โปรแกรมเมอร์</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">ติดต่อเรา</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;