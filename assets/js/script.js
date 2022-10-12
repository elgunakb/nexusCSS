function toggle() {
    const sidebar = document.getElementById("navDivDisplay");
    const visibleClassName = 'visible';
  
    if (sidebar.classList.contains(visibleClassName)) {
      sidebar.classList.remove(visibleClassName);
    } else {
      sidebar.classList.add(visibleClassName);
    }
  }
  $().button('toggle');