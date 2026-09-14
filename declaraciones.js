/**
 * Lógica dinámica para la carga de Modelos Sugeridos de Declaración Jurada
 * Juzgado de Paz Letrado - Presidencia Roque Sáenz Peña
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('acordeonModelosDeclaracion');
  const template = document.getElementById('template-modelo-declaracion') || document.querySelector('template');

  if (!container || !template) {
    return;
  }

  fetch('dec_juradas.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar modelos de declaración: ${response.status}`);
      }
      return response.json();
    })
    .then(modelos => {
      const fragment = document.createDocumentFragment();

      modelos.forEach((item, index) => {
        const clone = template.content.cloneNode(true);
        const collapseId = `collapseModelo${index}`;
        const headerId = `headingModelo${index}`;

        // Asignar IDs y referencias de Bootstrap Accordion
        const header = clone.querySelector('.accordion-header');
        const button = clone.querySelector('.accordion-button');
        const collapse = clone.querySelector('.accordion-collapse');

        if (header) header.id = headerId;
        if (button) {
          button.setAttribute('data-bs-target', `#${collapseId}`);
          button.setAttribute('aria-controls', collapseId);
        }
        if (collapse) {
          collapse.id = collapseId;
          collapse.setAttribute('aria-labelledby', headerId);
          collapse.setAttribute('data-bs-parent', '#acordeonModelosDeclaracion');
        }

        // Título
        const titleEl = clone.querySelector('.modelo-dec-title');
        if (titleEl) {
          titleEl.textContent = item.titulo;
        }

        // Declaración / Texto sugerido
        const textEl = clone.querySelector('.modelo-dec-texto');
        if (textEl) {
          textEl.textContent = item.declaracion;
        }

        // Manejo de Ícono / Imagen referencial
        const imgEl = clone.querySelector('.modelo-icon-img');
        const fallbackIcon = clone.querySelector('.modelo-icon-fallback');

        if (item.imagen && imgEl) {
          imgEl.src = item.imagen;
          imgEl.alt = item.titulo;
          imgEl.onload = () => {
            imgEl.style.display = 'inline-block';
            if (fallbackIcon) fallbackIcon.style.display = 'none';
          };
          imgEl.onerror = () => {
            imgEl.style.display = 'none';
            if (fallbackIcon) fallbackIcon.style.display = 'inline-block';
          };
        }

        // Botón para copiar texto al portapapeles
        const copyBtn = clone.querySelector('.btn-copiar-modelo');
        if (copyBtn) {
          copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(item.declaracion).then(() => {
                const prevHtml = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="bi bi-check2 text-success"></i> ¡Texto copiado!';
                copyBtn.classList.replace('btn-outline-primary', 'btn-success');
                copyBtn.classList.add('text-white');
                setTimeout(() => {
                  copyBtn.innerHTML = prevHtml;
                  copyBtn.classList.replace('btn-success', 'btn-outline-primary');
                  copyBtn.classList.remove('text-white');
                }, 2200);
              }).catch(() => {
                fallbackCopy(item.declaracion, copyBtn);
              });
            } else {
              fallbackCopy(item.declaracion, copyBtn);
            }
          });
        }

        fragment.appendChild(clone);
      });

      // Insertar el fragmento completo en el DOM en una sola operación
      container.appendChild(fragment);
    })
    .catch(err => {
      console.error('Error al inicializar modelos de declaración jurada:', err);
    });
});

function fallbackCopy(text, btn) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    const prevHtml = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check2 text-success"></i> ¡Texto copiado!';
    setTimeout(() => {
      btn.innerHTML = prevHtml;
    }, 2000);
  } catch (e) {
    console.error('No se pudo copiar:', e);
  }
  document.body.removeChild(textarea);
}
