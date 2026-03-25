import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, AlertTriangle, Scale } from 'lucide-react'
import { LegalHero } from '@/components/legal/legal-hero'
import { LegalDocShell } from '@/components/legal/legal-doc-shell'
import { LegalToc } from '@/components/legal/legal-toc'
import { LegalSection } from '@/components/legal/legal-section'
import { LegalCallout } from '@/components/legal/legal-callout'

export const metadata: Metadata = {
  title: 'Política de privacidad | entradascompare',
  description:
    'Información sobre el responsable del tratamiento, finalidades, base jurídica, conservación, derechos ARCO+ y reclamación ante la AEPD en entradascompare.',
}

const toc = [
  { id: 'responsable', label: 'Responsable del tratamiento' },
  { id: 'delegado', label: 'Delegado de protección de datos' },
  { id: 'finalidades', label: 'Finalidades y base jurídica' },
  { id: 'datos', label: 'Categorías de datos' },
  { id: 'conservacion', label: 'Plazos de conservación' },
  { id: 'destinatarios', label: 'Destinatarios y encargados' },
  { id: 'transferencias', label: 'Transferencias internacionales' },
  { id: 'derechos', label: 'Derechos del interesado' },
  { id: 'reclamacion', label: 'Autoridad de control' },
  { id: 'menores', label: 'Menores de edad' },
  { id: 'seguridad', label: 'Medidas de seguridad' },
  { id: 'modificaciones', label: 'Modificaciones' },
  { id: 'contacto-priv', label: 'Contacto' },
]

export default function PrivacidadPage() {
  return (
    <>
      <LegalHero
        icon={Shield}
        label="Protección de datos"
        title="Política de privacidad"
        docRef="EC-PRIV-2026-03"
        updated="24 de marzo de 2026"
        jurisdiction="Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), en lo aplicable a responsables establecidos en España."
      />

      <LegalDocShell toc={<LegalToc title="Índice del documento" items={toc} />}>
        <LegalCallout icon={Scale} title="Alcance y naturaleza del Sitio" variant="emphasis">
          <p>
            <strong>entradascompare.com</strong> ofrece información comparativa sobre precios de entradas deportivas
            publicados o referenciados por colaboradores. <strong>No vendemos entradas</strong>, no gestionamos reservas ni
            cobros en este dominio, y <strong>no solicitamos datos bancarios</strong> para operaciones de compra.
          </p>
        </LegalCallout>

        <div className="mt-14 space-y-14">
          <LegalSection id="responsable" index="01" title="Responsable del tratamiento">
            <p>
              El responsable del tratamiento de los datos personales obtenidos a través del Sitio es la entidad que opera{' '}
              <strong>entradascompare</strong> en el marco descrito en el aviso legal y documentos asociados.
            </p>
            <ul className="space-y-2 rounded-xl border border-stone-200 bg-stone-50/90 p-6 text-stone-800">
              <li>
                <strong className="text-stone-950">Denominación:</strong> entradascompare
              </li>
              <li>
                <strong className="text-stone-950">Sitio web:</strong>{' '}
                <a href="https://entradascompare.com" className="font-semibold text-orange-900 underline underline-offset-2">
                  https://entradascompare.com
                </a>
              </li>
              <li>
                <strong className="text-stone-950">Correo de contacto:</strong>{' '}
                <a href="mailto:info@entradascompare.com" className="font-semibold text-orange-900 underline underline-offset-2">
                  info@entradascompare.com
                </a>
              </li>
              <li>
                <strong className="text-stone-950">Dirección postal:</strong> Paseo de la Castellana 95, 28046 Madrid, España
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="delegado" index="02" title="Delegado de protección de datos (DPO)">
            <p>
              No se ha designado Delegado de Protección de Datos en la medida en que, conforme a la normativa aplicable, no resulte
              obligatorio para la actividad y el volumen de tratamientos actuales del Sitio. Cualquier consulta relativa a
              privacidad puede dirigirse al correo indicado en el apartado de responsable.
            </p>
            <p>
              Si en el futuro se designara un DPO, se publicará su identidad y datos de contacto en esta misma política.
            </p>
          </LegalSection>

          <LegalSection id="finalidades" index="03" title="Finalidades del tratamiento y base jurídica">
            <p>Tratamos datos personales únicamente para finalidades determinadas, explícitas y legítimas:</p>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-100">
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-stone-800">
                      Finalidad
                    </th>
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-stone-800">
                      Base jurídica (art. 6 RGPD)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 text-stone-700">
                      Permitir la navegación, mantener la seguridad del Sitio y gestionar preferencias esenciales (incluida la
                      cookie de consentimiento).
                    </td>
                    <td className="px-4 py-3 text-stone-700">
                      Interés legítimo y/o cumplimiento de obligaciones legales aplicables; cuando proceda, ejecución de medidas
                      precontractuales a petición del interesado.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-stone-700">
                      Gestionar consultas enviadas a través del formulario de contacto.
                    </td>
                    <td className="px-4 py-3 text-stone-700">
                      Interés legítimo del responsable en atender solicitudes, o consentimiento del interesado al enviar el
                      formulario de forma voluntaria.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-stone-700">
                      Analítica web agregada, solo si el usuario ha prestado consentimiento cuando sea necesario.
                    </td>
                    <td className="px-4 py-3 text-stone-700">Consentimiento del interesado (art. 6.1.a RGPD).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </LegalSection>

          <LegalSection id="datos" index="04" title="Categorías de datos personales">
            <p>Según la interacción con el Sitio, pueden tratarse, entre otras, las siguientes categorías:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-orange-700">
              <li>
                <strong className="text-stone-900">Datos de navegación y dispositivo:</strong> dirección IP, tipo de navegador,
                idioma, páginas visitadas, marca temporal aproximada, identificadores técnicos generados por cookies o similares.
              </li>
              <li>
                <strong className="text-stone-900">Datos identificativos y de contacto:</strong> nombre, dirección de correo
                electrónico y, si los facilitas voluntariamente, teléfono u otros datos incluidos en el mensaje del formulario.
              </li>
              <li>
                <strong className="text-stone-900">Contenido del mensaje:</strong> texto libre que envíes en la consulta.
              </li>
            </ul>
            <LegalCallout icon={AlertTriangle} title="Datos especialmente protegidos" variant="neutral">
              <p>
                No solicitamos de forma activa datos que revelen origen racial o étnico, opiniones políticas, convicciones
                religiosas, datos de salud u orientación sexual. Si incluyeras voluntariamente este tipo de información en un
                mensaje, te rogamos que la limites al mínimo imprescindible; procederemos a tratarla solo en la medida necesaria
                para gestionar tu solicitud.
              </p>
            </LegalCallout>
          </LegalSection>

          <LegalSection id="conservacion" index="05" title="Plazos de conservación">
            <p>
              Los datos se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recabados y, en
              su caso, para el ejercicio o la defensa de reclamaciones.
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-orange-700">
              <li>
                <strong className="text-stone-900">Consultas por formulario:</strong> habitualmente hasta 24–36 meses desde la
                última interacción, salvo obligación legal de conservación superior o reclamación en curso.
              </li>
              <li>
                <strong className="text-stone-900">Cookies y registros técnicos:</strong> según lo indicado en la{' '}
                <Link href="/cookies" className="font-bold text-orange-900 underline underline-offset-2">
                  política de cookies
                </Link>{' '}
                y según configuración del proveedor de servicios.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="destinatarios" index="06" title="Destinatarios y encargados del tratamiento">
            <p>
              Los datos podrán ser comunicados a proveedores que presten servicios en nombre del responsable (alojamiento,
              infraestructura, correo, analítica), actuando en su caso como <strong>encargados del tratamiento</strong> mediante
              contrato o cláusulas tipo que exijan medidas adecuadas de confidencialidad y seguridad.
            </p>
            <p>
              No vendemos listas de usuarios ni cedemos datos personales a terceros para su marketing independiente.
            </p>
          </LegalSection>

          <LegalSection id="transferencias" index="07" title="Transferencias internacionales">
            <p>
              Si algún encargado del tratamiento tiene sede o trata datos fuera del Espacio Económico Europeo, nos aseguraremos de
              que exista una decisión de adecuación, Cláusulas Contractuales Tipo aprobadas por la Comisión Europea u otro mecanismo
              válido conforme al capítulo V del RGPD.
            </p>
          </LegalSection>

          <LegalSection id="derechos" index="08" title="Derechos del interesado">
            <p>
              Puedes ejercer los derechos de <strong>acceso, rectificación, supresión, oposición, limitación del tratamiento,
              portabilidad</strong> cuando legalmente proceda, y retirar el consentimiento en cualquier momento, sin que ello
              afecte a la licitud del tratamiento previo.
            </p>
            <p>
              Para ejercer tus derechos, escribe a{' '}
              <a href="mailto:info@entradascompare.com" className="font-bold text-orange-900 underline underline-offset-2">
                info@entradascompare.com
              </a>{' '}
              indicando la solicitud concreta y un medio fehaciente de identificación razonable. Respondemos en los plazos legales.
            </p>
          </LegalSection>

          <LegalSection id="reclamacion" index="09" title="Derecho a reclamar ante la autoridad de control">
            <p>
              Si consideras que el tratamiento de tus datos personales vulnera la normativa, tienes derecho a presentar una
              reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>, u otra autoridad competente en
              tu país de residencia habitual.
            </p>
            <p>
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-900 underline underline-offset-2"
              >
                www.aepd.es
              </a>
            </p>
          </LegalSection>

          <LegalSection id="menores" index="10" title="Menores de edad">
            <p>
              El Sitio no está dirigido a menores de 14 años. Si eres padre, madre o tutor y crees que un menor nos ha facilitado
              datos personales, contacta con nosotros para adoptar las medidas oportunas.
            </p>
          </LegalSection>

          <LegalSection id="seguridad" index="11" title="Medidas técnicas y organizativas">
            <p>
              Aplicamos medidas razonables de índole técnica y organizativa para proteger los datos contra el acceso no autorizado,
              la alteración, la divulgación o la destrucción. Ningún sistema es completamente invulnerable; te recomendamos usar
              contraseñas robustas en tus cuentas de correo y mantener tu dispositivo actualizado.
            </p>
          </LegalSection>

          <LegalSection id="modificaciones" index="12" title="Modificaciones de la política">
            <p>
              Podemos actualizar esta política para reflejar cambios legales o del Sitio. La fecha de vigencia se indicará en el
              encabezado. Los cambios sustanciales se procurarán comunicar por medios razonables cuando la ley lo exija.
            </p>
          </LegalSection>

          <LegalSection id="contacto-priv" index="13" title="Contacto">
            <p>
              <strong className="text-stone-900">Correo electrónico:</strong>{' '}
              <a href="mailto:info@entradascompare.com" className="font-bold text-orange-900 underline underline-offset-2">
                info@entradascompare.com
              </a>
            </p>
            <p className="text-stone-600">
              <strong className="text-stone-900">Dirección postal:</strong> Paseo de la Castellana 95, 28046 Madrid, España
            </p>
          </LegalSection>
        </div>
      </LegalDocShell>

      <footer className="bg-stone-950 py-10 text-center text-xs text-stone-500">
        <p className="mx-auto max-w-2xl px-4">
          Texto elaborado con fines de transparencia conforme al RGPD y normativa española complementaria. No sustituye el
          asesoramiento jurídico particular. Uso de cookies:{' '}
          <Link href="/cookies" className="font-semibold text-stone-300 underline underline-offset-2 hover:text-white">
            política de cookies
          </Link>
          .
        </p>
      </footer>
    </>
  )
}
