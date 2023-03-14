window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="../Assets\profile-images\Ellipse -1.png"></td>
        <td>Rinku Berde</td>
        <td>Female</td>
        <td><div class='dept-label'>HR</div>
            <div class="dept-label">Finance</div>
            <td>3000000</td>
            <td>12 May 2023</td>
            <td class="action">
            <img src="../Assets\icons\delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
            <img src="../Assets\icons\create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
                    </td>
                </tr>
                `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}