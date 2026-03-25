import type { Metadata } from 'next'
import Link from 'next/link'
import { Cookie, AlertTriangle, Info } from 'lucide-react'
import { LegalHero } from '@/components/legal/legal-hero'
import { LegalDocShell } from '@/components/legal/legal-doc-shell'
import { LegalToc } from '@/components/legal/legal-toc'
import { LegalSection } from '@/components/legal/legal-section'
import { LegalCallout } from '@/components/legal/legal-callout'

export const metadata: Metadata = {
  title: 'Política de cookies | entradascompare',
  description:
    'Información detallada sobre cookies y tecnologías similares en entradascompare.com: tipos, finalidades, conservación y gestión del consentimiento.',
}

const toc = [
  { id: 'objeto', label: 'Objeto y ámbito' },
  { id: 'definicion', label: 'Definición y finalidad general' },
  { id: 'tipos', label: 'Tipos de cookies y similares' },
  { id: 'consentimiento', label: 'Consentimiento y revocación' },
  { id: 'inventario', label: 'Inventario y plazos' },
  { id: 'terceros', label: 'Terceros y encargados' },
  { id: 'navegador', label: 'Configuración del navegador' },
  { id: 'actualizaciones', label: 'Actualizaciones del documento' },
  { id: 'contacto', label: 'Contacto' },
]

export default function CookiesPage() {
  return (
    <>
      <LegalHero
        icon={Cookie}
        label="Documento legal"
        title="Política de cookies"
        docRef="EC-COOKIES-2026-03"
        updated="24 de marzo de 2026"
        jurisdiction="Unión Europea y España. Directiva 2002/58/CE (ePrivacy), en la redacción aplicable, y normativa de protección de datos cuando corresponda."
      />

      <LegalDocShell toc={<LegalToc title="Índice" items={toc} />}>
        <LegalCallout icon={AlertTriangle} title="Declaración esencial" variant="critical">
          <p>
            <strong>entradascompare</strong> es un sitio comparador informativo. <strong>No vendemos entradas</strong> ni
            procesamos pagos en este dominio. Las cookies y tecnologías descritas sirven al funcionamiento del sitio, a la
            gestión de preferencias y, solo si consientes de forma expresa, a finalidades analíticas agregadas.
          </p>
        </LegalCallout>

        <div className="mt-14 space-y-14">
          <LegalSection id="objeto" index="01" title="Objeto y ámbito">
            <p>
              El presente documento informa de forma clara y exhaustiva sobre el uso de cookies, identificadores similares y
              almacenamiento local en el dominio <strong>entradascompare.com</strong> (en adelante, el «Sitio»), de conformidad
              con las exigencias de transparencia aplicables en el Espacio Económico Europeo y en España.
            </p>
            <p>
              La aceptación o rechazo de cookies no condiciona el acceso a la información general del Sitio, salvo en lo
              estrictamente necesario para su funcionamiento técnico y seguro.
            </p>
          </LegalSection>

          <LegalSection id="definicion" index="02" title="Definición y finalidad general">
            <p>
              Las <strong>cookies</strong> son pequeños archivos que el Sitio, o un tercero autorizado, almacenan en el
              dispositivo del usuario cuando visita una página web. También pueden utilizarse tecnologías análogas (p. ej.
              almacenamiento local del navegador) con fines equivalentes.
            </p>
            <p>
              Las finalidades pueden incluir: mantener la sesión técnica, recordar preferencias (incluida la elección sobre el
              propio banner de cookies), medir de forma agregada el uso del Sitio cuando exista base legal y consentimiento
              adecuado, y garantizar la seguridad frente a abusos.
            </p>
          </LegalSection>

          <LegalSection id="tipos" index="03" title="Tipos de cookies y similares">
            <p>En el Sitio distinguimos, a efectos informativos, las siguientes categorías:</p>
            <ul className="list-none space-y-4 border-l-2 border-orange-800/25 pl-6">
              <li>
                <strong className="text-stone-900">Estrictamente necesarias.</strong> Imprescindibles para el funcionamiento
                básico, la seguridad, la carga equilibrada o la gestión del consentimiento. No requieren consentimiento previo
                cuando la ley así lo reconoce para este tipo de finalidades.
              </li>
              <li>
                <strong className="text-stone-900">De preferencias o funcionales.</strong> Recuerdan elecciones del usuario
                (por ejemplo, la respuesta al banner de cookies). Pueden considerarse necesarias para respetar una preferencia
                expresa ya manifestada.
              </li>
              <li>
                <strong className="text-stone-900">Analíticas (opcionales).</strong> Solo se emplean si has aceptado
                expresamente su uso. Tienden a agregar información de uso sin identificarte de forma directa con fines
                comerciales invasivos.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="consentimiento" index="04" title="Consentimiento y revocación">
            <p>
              Cuando una cookie no sea estrictamente necesaria, solicitaremos tu <strong>consentimiento informado</strong> a
              través del banner o mecanismo equivalente. Puedes <strong>retirar o modificar</strong> tu consentimiento en
              cualquier momento:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-orange-700">
              <li>Borrando las cookies del Sitio desde la configuración de tu navegador.</li>
              <li>
                Eliminando la cookie de preferencia indicada en el inventario inferior (al hacerlo, el banner puede volver a
                mostrarse).
              </li>
              <li>
                Contactando con nosotros en{' '}
                <a href="mailto:info@entradascompare.com" className="font-bold text-orange-900 underline underline-offset-2">
                  info@entradascompare.com
                </a>{' '}
                para consultas sobre el tratamiento asociado.
              </li>
            </ul>
            <LegalCallout icon={Info} title="Sin perjuicio de tus derechos" variant="emphasis">
              <p>
                La retirada del consentimiento no afecta a la licitud del tratamiento basado en el consentimiento previo a su
                retirada. Para derechos relacionados con datos personales, consulta la{' '}
                <Link href="/privacidad" className="font-bold underline underline-offset-2">
                  política de privacidad
                </Link>
                .
              </p>
            </LegalCallout>
          </LegalSection>

          <LegalSection id="inventario" index="05" title="Inventario orientativo y plazos de conservación">
            <p>
              La lista siguiente tiene carácter <strong>orientativo</strong>. Los nombres exactos pueden variar ligeramente
              según despliegue técnico o actualizaciones del proveedor de alojamiento o analítica.
            </p>
            <div className="overflow-x-auto rounded-xl border border-stone-200 bg-stone-50/80">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-100">
                    <th className="px-4 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-stone-800">
                      Nombre / patrón
                    </th>
                    <th className="px-4 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-stone-800">
                      Tipo
                    </th>
                    <th className="px-4 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-stone-800">
                      Finalidad
                    </th>
                    <th className="px-4 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-stone-800">
                      Duración orientativa
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-4 py-3.5 font-mono text-xs text-stone-800">entradascompare_cookie_consent_v2</td>
                    <td className="px-4 py-3.5 text-stone-700">Necesaria / preferencia</td>
                    <td className="px-4 py-3.5 text-stone-700">Almacenar la elección del usuario respecto al banner de cookies.</td>
                    <td className="px-4 py-3.5 text-stone-700">12 meses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5 font-mono text-xs text-stone-800">Sesión técnica (first-party)</td>
                    <td className="px-4 py-3.5 text-stone-700">Necesaria</td>
                    <td className="px-4 py-3.5 text-stone-700">Seguridad, equilibrio de carga o entrega de contenido estático.</td>
                    <td className="px-4 py-3.5 text-stone-700">Sesión o según despliegue</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5 font-mono text-xs text-stone-800">vercel_* / proveedor de hosting</td>
                    <td className="px-4 py-3.5 text-stone-700">Necesaria / analítica</td>
                    <td className="px-4 py-3.5 text-stone-700">
                      Funcionamiento del servicio de alojamiento y, si aceptas analítica, métricas agregadas de visitas.
                    </td>
                    <td className="px-4 py-3.5 text-stone-700">Según política del proveedor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </LegalSection>

          <LegalSection id="terceros" index="06" title="Terceros y encargados del tratamiento">
            <p>
              Ciertos datos generados por cookies pueden ser accesibles por <strong>proveedores de infraestructura</strong> o
              herramientas de analítica que actúan como encargados del tratamiento o, en su caso, como responsables independientes,
              según lo establecido en sus propias políticas.
            </p>
            <p>
              Te recomendamos revisar la documentación del proveedor de alojamiento (p. ej. Vercel) y de cualquier herramienta de
              analítica activada en el Sitio. No utilizamos cookies para publicidad comportamental de terceros en el sentido
              invasivo del término.
            </p>
          </LegalSection>

          <LegalSection id="navegador" index="07" title="Configuración del navegador">
            <p>
              Puedes permitir, bloquear o eliminar cookies mediante la configuración de tu navegador. La ruta exacta depende del
              programa utilizado (Chrome, Firefox, Safari, Edge, etc.). Ten en cuenta que el bloqueo de cookies necesarias puede
              afectar a la visualización o estabilidad del Sitio.
            </p>
          </LegalSection>

          <LegalSection id="actualizaciones" index="08" title="Actualizaciones">
            <p>
              Podemos modificar esta política para adaptarla a cambios legislativos, jurisprudencia o funcionalidades del Sitio.
              La fecha de última actualización figura en el encabezado de este documento. El uso continuado tras la publicación
              de cambios materiales implicará que has tomado conocimiento de la versión vigente.
            </p>
          </LegalSection>

          <LegalSection id="contacto" index="09" title="Contacto">
            <p>
              Para cualquier cuestión relacionada con esta política o con el ejercicio de derechos en materia de datos personales:{' '}
              <a href="mailto:info@entradascompare.com" className="font-bold text-orange-900 underline underline-offset-2">
                info@entradascompare.com
              </a>
              <br />
              <span className="mt-2 inline-block text-stone-600">
                Dirección postal: Paseo de la Castellana 95, 28046 Madrid, España.
              </span>
            </p>
          </LegalSection>
        </div>
      </LegalDocShell>

      <footer className="bg-stone-950 py-10 text-center text-xs text-stone-500">
        <p className="mx-auto max-w-2xl px-4">
          Documento redactado con fines informativos y de transparencia. No constituye asesoramiento jurídico individual. Para el
          tratamiento de datos personales, véase la{' '}
          <Link href="/privacidad" className="font-semibold text-stone-300 underline underline-offset-2 hover:text-white">
            política de privacidad
          </Link>
          .
        </p>
      </footer>
    </>
  )
}
