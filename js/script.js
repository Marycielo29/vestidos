
const PRODUCTS = [
  // 🌸 --- VESTIDOS LARGOS ---
  {id:'p1', title:'Vestido Floral', category:'largo', price:120, usd:50, imgs:[
    'https://i.pinimg.com/736x/cd/b8/b8/cdb8b8a21a9463fb0989156e1569a2a6.jpg'
  ], desc:'Corte sirena con estampado floral y tela ligera. Ideal para ceremonias y eventos formales.'},

  {id:'p2', title:'Vestido Aurora', category:'largo', price:180, usd:45, imgs:[
    'https://i.pinimg.com/736x/d0/4b/b4/d04bb4916030df105205e04208124538.jpg'
  ], desc:'Diseño de gala con detalles bordados, forro suave y caída elegante.'},

  {id:'p3', title:'Vestido Luna', category:'largo', price:110, usd:28, imgs:[
    'https://i.pinimg.com/736x/7f/af/83/7faf8366709855765e4c2931bc215c3b.jpg'
  ], desc:'Vestido largo de gasa con abertura lateral, ideal para noches especiales.'},

  {id:'p4', title:'Vestido Perla', category:'largo', price:160, usd:15, imgs:[
    'https://i.pinimg.com/1200x/38/6e/9a/386e9aae950933008c562cd96e9f244d.jpg'
  ], desc:'Elegante vestido negro con escote cruzado y falda fluida para eventos formales.'},

  {id:'p5', title:'Vestido Esmeralda', category:'largo', price:190, usd:22, imgs:[
    'https://i.pinimg.com/1200x/c0/f2/f1/c0f2f1963eaf55727075937dd676bd0b.jpg'
  ], desc:'Tono verde esmeralda con tela satinada y caída ligera, ideal para recepciones.'},

  {id:'p6', title:'Vestido Dorado', category:'largo', price:160, usd:40, imgs:[
    'https://i.pinimg.com/1200x/29/64/76/2964763cb078e9797cef88334df091f1.jpg'
  ], desc:'Vestido dorado brillante con espalda descubierta y corte elegante.'},

  // 🌷 --- VESTIDOS CORTOS ---
  {id:'p7', title:'Vestido Rosa', category:'corto', price:120, usd:55, imgs:[
    'https://i.pinimg.com/1200x/56/17/a8/5617a83857dcb2bd79efefbb6cd68974.jpg'
  ], desc:'Mini dress con caída fluida, perfecto para cocteles y salidas nocturnas.'},

  {id:'p8', title:'Vestido Chic', category:'corto', price:140, usd:60, imgs:[
    'https://i.pinimg.com/1200x/c9/29/0a/c9290a91b8493e0d0e07d249ed0bafe2.jpg'
  ], desc:'Corto aterciopelado con brillo sutil — perfecto para la noche.'},

  {id:'p9', title:'Vestido Nelss', category:'corto', price:110, usd:53, imgs:[
    'https://i.pinimg.com/736x/bb/74/a9/bb74a9d0bb0ce6061eeea78d4fb64001.jpg'
  ], desc:'Vestido corto rosa con volantes, ideal para reuniones casuales o cenas románticas.'},

  {id:'p10', title:'Vestido Azul', category:'corto', price:130, usd:57, imgs:[
    'https://i.pinimg.com/736x/55/5e/fd/555efd912905ed9efb4eacd336eaa705.jpg'
  ], desc:'Vestido de tono azul celeste con tiras finas y tela vaporosa, cómodo y fresco.'},

  {id:'p11', title:'Vestido Sophia', category:'corto', price:150, usd:63, imgs:[
    'https://i.pinimg.com/736x/99/f9/8b/99f98bf205cc0ba3c139140a67dfb64e.jpg'
  ], desc:'Diseño moderno y juvenil, ideal para fiestas o citas nocturnas.'},

  {id:'p12', title:'Vestido Coral', category:'corto', price:135, usd:59, imgs:[
    'https://i.pinimg.com/736x/d6/80/50/d680506da90a3ec1b711ffa6683f604f.jpg'
  ], desc:'Corto color coral con detalles fruncidos, elegante y casual al mismo tiempo.'},

  // ☀️ --- VESTIDOS DE VERANO ---
  {id:'p13', title:'Vestido Verano Zara', category:'verano', price:50, usd:38, imgs:[
    'https://i.pinimg.com/736x/4d/6d/83/4d6d839561c13be09965e073863cf32d.jpg'
  ], desc:'Vestido fresco de verano con estampado vibrante y tejido transpirable.'},

  {id:'p14', title:'Vestido Verano Lilas', category:'verano', price:60, usd:40, imgs:[
    'https://i.pinimg.com/736x/a0/42/a9/a042a9d3f1d424bd931652f84af6ccca.jpg'
  ], desc:'Vestido blanco con diseño boho, ideal para la playa o días soleados.'},

  {id:'p15', title:'Vestido Verano Cielo', category:'verano', price:75, usd:44, imgs:[
    'https://i.pinimg.com/736x/c2/7e/fd/c27efd19410e189bc8bda0f34002689f.jpg'
  ], desc:'Vestido con estampado tropical, ligero y cómodo para días cálidos.'},

  {id:'p16', title:'Vestido Verano  Marina', category:'verano', price:65, usd:41, imgs:[
    'https://i.pinimg.com/1200x/95/fc/c7/95fcc7ec8173501d147fdaa8711a1cb6.jpg'
  ], desc:'Vestido azul claro de algodón, con tiras finas y estilo playero.'},

  {id:'p17', title:'Vestido Verano Pamela', category:'verano', price:80, usd:45, imgs:[
    'https://i.pinimg.com/736x/58/9f/cd/589fcd3e63c7bead411b9f85d0887142.jpg'
  ], desc:'Corte simple con tonos cálidos, ideal para paseos al aire libre o vacaciones.'},

  {id:'p18', title:'Vestido Verano Sol', category:'verano', price:90, usd:48, imgs:[
    'https://i.pinimg.com/1200x/61/75/fe/6175fefff03578b21487b26096ef05b5.jpg'
  ], desc:'Estampado floral con falda suelta y tela fresca, perfecta para el verano.'},

  // 👗 --- VESTIDOS KIDS ---
  {id:'p19', title:'Dulce Princesa', category:'kids', price:120, usd:30, imgs:[
    'https://i.pinimg.com/1200x/72/c3/86/72c38632119cd6b2786392976c476c86.jpg'
  ], desc:'Vestido infantil cómodo y adorable, ideal para fiestas y eventos escolares.'},

  {id:'p20', title:'Pequeña Flor', category:'kids', price:110, usd:28, imgs:[
    'https://i.pinimg.com/736x/52/93/d3/5293d31a93ca79510d1c748152ba5a39.jpg'
  ], desc:'Vestido de algodón con estampado floral, ideal para tardes soleadas.'},

  {id:'p21', title:'Rosa Cuento', category:'kids', price:130, usd:32, imgs:[
    'https://i.pinimg.com/1200x/58/7d/97/587d975cd03ca78a425a3f36f83a02c5.jpg'
  ], desc:'Diseño inspirado en princesas, con tul y lazo trasero.'},

  {id:'p22', title:'Alegría Infantil', category:'kids', price:100, usd:25, imgs:[
    'https://i.pinimg.com/1200x/21/62/27/216227cd387577d0930778183e8abe76.jpg'
  ], desc:'Vestido colorido con volantes suaves y estampado alegre.'},

  {id:'p23', title:'Encanto de Fresa', category:'kids', price:125, usd:31, imgs:[
    'https://i.pinimg.com/1200x/1b/8d/90/1b8d908028b5c079505e7e2ae67bf1d3.jpg'
  ], desc:'Vestido rosado con detalles de encaje, adorable y fresco.'},

  {id:'p24', title:'Luna Pequeña', category:'kids', price:115, usd:29, imgs:[
    'https://i.pinimg.com/1200x/6c/b9/1b/6cb91b3f30375f55d2a4e9d34e6f3751.jpg'
  ], desc:'Vestido suave con estampado de lunares, ideal para cualquier ocasión.'}
];


function $(s){ return document.querySelector(s); }
function $all(s){ return Array.from(document.querySelectorAll(s)); }

// Cart functions using localStorage
const CART_KEY = 'amory_cart_v1';
function loadCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY))||{} }catch(e){ return {} } }
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); renderCartCount(); }
function addToCart(id){ const cart = loadCart(); if(!cart[id]) cart[id] = {id, qty:0}; cart[id].qty += 1; saveCart(cart); alert('Producto añadido al carrito'); }
function renderCartCount(){ const cart = loadCart(); const qty = Object.values(cart).reduce((s,i)=>s+i.qty,0); const el = document.getElementById('cartCount'); if(el) el.innerText = qty; }
function clearCart(){ localStorage.removeItem(CART_KEY); renderCartCount(); alert('Carrito vaciado'); }

document.addEventListener('DOMContentLoaded', ()=>{
  renderCartCount();
  // If catalog container exists, render products grid
  const catalog = document.getElementById('catalog');
  if(catalog){
    PRODUCTS.forEach(p=>{
      const col = document.createElement('div'); col.className='col-md-4';
      col.innerHTML = `
        <div class="card h-100 shadow-sm product-card" data-category="${p.category}">
          <img src="${p.imgs[0]}" class="card-img-top" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text text-muted small">${p.desc}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <div><strong>S/ ${p.price}.00</strong><br><small class="text-muted">USD ${p.usd}.00</small></div>
              <div>
                <a href="producto.html?id=${p.id}" class="btn btn-outline-primary btn-sm me-2">Ver</a>
                <button class="btn btn-primary btn-sm btnAdd" data-id="${p.id}">Añadir</button>
              </div>
            </div>
          </div>
        </div>`;
      catalog.appendChild(col);
    });
    // Filter buttons
    $all('[data-filter]').forEach(btn=>btn.addEventListener('click', ()=>{
      const f = btn.getAttribute('data-filter');
      $all('#catalog .product-card').forEach(card=>{
        if(f==='all' || card.dataset.category===f) card.parentElement.style.display='';
        else card.parentElement.style.display='none';
      });
    }));
  }

  // Product detail page
  const detail = document.getElementById('productDetail');

if (detail) {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const p = PRODUCTS.find(x => x.id === id);

  if (!p) {
    detail.innerHTML = `<div class="alert alert-danger text-center">Producto no encontrado.</div>`;
    return;
  }

  detail.innerHTML = `
    <div class="col-md-6 text-center">
      <img src="${p.imgs[0]}" class="img-fluid rounded shadow-sm mb-3 main-img" alt="${p.title}">
      <div class="d-flex justify-content-center gap-2 mt-2 flex-wrap">
        ${p.imgs.map(img => `
          <img src="${img}" class="img-thumbnail border-0 shadow-sm" 
               style="width:80px;height:80px;object-fit:cover;cursor:pointer;" 
               onclick="document.querySelector('.main-img').src='${img}'">
        `).join('')}
      </div>
    </div>

    <div class="col-md-6">
      <h2 class="fw-bold mb-2">${p.title} 
        <span class="badge bg-pink text-white ms-2">Nuevo</span>
      </h2>
      <p class="text-muted mb-3">${p.desc}</p>

      <div class="mb-3">
        <h6 class="fw-semibold">Colores disponibles:</h6>
        <div class="d-flex gap-2">
          <span class="rounded-circle border" style="width:25px;height:25px;background-color:#f8b6c3;"></span>
          <span class="rounded-circle border" style="width:25px;height:25px;background-color:#d1a1ff;"></span>
          <span class="rounded-circle border" style="width:25px;height:25px;background-color:#f5f5f5;"></span>
        </div>
      </div>

      <div class="mb-3">
        <h6 class="fw-semibold">Cantidad:</h6>
        <input type="number" id="qty" value="1" min="1" class="form-control w-25">
      </div>

      <div class="mb-3">
        <h4 class="text-primary fw-bold">S/ ${p.price.toFixed(2)}</h4>
        <p class="text-muted small">USD $${p.usd.toFixed(2)}</p>
      </div>

      <div class="mb-4">
        <h6 class="fw-semibold mb-2">Métodos de pago:</h6>
        <div class="d-flex gap-3 fs-4 text-secondary">
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-paypal"></i>
          <i class="fab fa-cc-amex"></i>
        </div>
      </div>

      <div class="d-flex gap-3">
        <button class="btn btn-dark px-4" id="btnAddDetail">
          <i class="bi bi-cart-plus"></i> Añadir al carrito
        </button>
        <a href="categorias.html" class="btn btn-outline-secondary px-4">
          <i class="bi bi-arrow-left"></i> Volver
        </a>
      </div>
    </div>
  `;

  // Evento para añadir al carrito
  document.getElementById('btnAddDetail').addEventListener('click', () => {
    addToCart(p.id);
  });
}


  // Cart page render
  const cartList = document.getElementById('cartList');
  if(cartList){
    function renderCart(){ const cart = loadCart(); cartList.innerHTML=''; let total=0;
      if(Object.keys(cart).length===0){ cartList.innerHTML='<p class="text-muted">Carrito vacío.</p>'; document.getElementById('cartTotal').innerText='S/ 0.00'; return; }
      Object.values(cart).forEach(item=>{
        const prod = PRODUCTS.find(p=>p.id===item.id);
        if(!prod) return;
        const row = document.createElement('div'); row.className='d-flex align-items-center justify-content-between p-2 border mb-2';
        row.innerHTML = `<div class="d-flex align-items-center"><img src="${prod.imgs[0]}" style="width:72px;height:72px;object-fit:cover;border-radius:8px" class="me-3"><div><strong>${prod.title}</strong><div class="text-muted small">${prod.desc}</div></div></div><div class="text-end"><div>S/ ${prod.price}.00 x ${item.qty}</div><div class="mt-2"><button class="btn btn-sm btn-outline-secondary me-2" data-id="${prod.id}" data-action="dec">-</button><button class="btn btn-sm btn-outline-secondary" data-id="${prod.id}" data-action="inc">+</button></div></div>`;
        cartList.appendChild(row); total += prod.price * item.qty;
      });
      document.getElementById('cartTotal').innerText = 'S/ ' + total.toFixed(2);
      // attach inc/dec
      $all('[data-action]').forEach(b=>b.addEventListener('click', (e)=>{
        const id = e.currentTarget.getAttribute('data-id'); const action = e.currentTarget.getAttribute('data-action');
        const cart = loadCart(); if(!cart[id]) return; if(action==='inc') cart[id].qty +=1; else { cart[id].qty -=1; if(cart[id].qty<=0) delete cart[id]; }
        saveCart(cart); renderCart();
      }));
    }
    renderCart();
    document.getElementById('clearCart')?.addEventListener('click', ()=>{ clearCart(); renderCart(); });
    document.getElementById('checkout')?.addEventListener('click', ()=>{ alert('Simulación de pago - implementar gateway real'); });
  }

  // Add buttons global (delegate)
  document.body.addEventListener('click', function(e){
    if(e.target.classList.contains('btnAdd')){ const id = e.target.getAttribute('data-id'); addToCart(id); }
  });

  // Comments page
  const commentForm = document.getElementById('commentForm');
  const commentsList = document.getElementById('commentsList');
  function loadComments(){ try{return JSON.parse(localStorage.getItem('amory_comments'))||[] }catch(e){return[]} }
  function saveComments(arr){ localStorage.setItem('amory_comments', JSON.stringify(arr)); }
  function renderComments(){ if(!commentsList) return; const arr = loadComments(); commentsList.innerHTML=''; if(arr.length===0) commentsList.innerHTML='<p class="text-muted">Aún no hay comentarios.</p>'; arr.slice().reverse().forEach(c=>{ const el = document.createElement('div'); el.className='card p-3 mb-2'; el.innerHTML = `<strong>${c.name}</strong> <div class="text-muted small">${'★'.repeat(c.rate)}</div><p class="mb-0">${c.text}</p>`; commentsList.appendChild(el); }); }
  if(commentForm){ commentForm.addEventListener('submit', (e)=>{ e.preventDefault(); const name = document.getElementById('cmName').value; const text = document.getElementById('cmText').value; const rate = Number(document.getElementById('cmRate').value); const arr = loadComments(); arr.push({name,text,rate, date:Date.now()}); saveComments(arr); renderComments(); commentForm.reset(); alert('Gracias por tu comentario!'); }); renderComments(); }

  // Contact form demo
  const cf = document.getElementById('contactForm'); if(cf){ cf.addEventListener('submit',(e)=>{ e.preventDefault(); alert('Mensaje enviado. Te responderemos pronto.'); cf.reset(); }); }

});
