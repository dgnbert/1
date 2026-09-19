const compareRange=document.querySelector('.compare input');
compareRange?.addEventListener('input',()=>{const n=Number(compareRange.value);compareRange.closest('.compare').style.setProperty('--split',n+'%');compareRange.setAttribute('aria-valuetext',`До ${n}%, после ${100-n}%`)});
