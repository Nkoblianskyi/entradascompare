'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react'

const topics = [
  {
    id: 'data',
    title: 'Datos desactualizados',
    hint: 'Precio, fecha o recinto',
  },
  {
    id: 'event',
    title: 'Sugerir evento',
    hint: 'Añadir al catálogo',
  },
  {
    id: 'partner',
    title: 'Colaboración',
    hint: 'Plataforma o medio',
  },
  {
    id: 'other',
    title: 'Otra consulta',
    hint: 'General',
  },
] as const

type TopicId = (typeof topics)[number]['id']

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '' as TopicId | '',
    message: '',
    privacy: false,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setForm((f) => ({ ...f, [name]: checked }))
    } else {
      setForm((f) => ({ ...f, [name]: value }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setAttemptedSubmit(true)
    if (!form.topic || !form.privacy) return
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-2xl border border-stone-200 bg-[#faf8f4] px-4 py-3.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/12'

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-stone-200 bg-white p-10 shadow-[0_24px_60px_-20px_rgba(28,25,23,0.2)] md:p-14">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 ring-8 ring-orange-50">
            <CheckCircle2 className="h-11 w-11 text-orange-800" aria-hidden />
          </div>
          <h2 className="font-display mt-8 text-3xl font-bold text-stone-900">Listo, lo tenemos</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Gracias por escribir. Revisaremos el mensaje y te contestaremos al correo que indicaste cuando podamos.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setAttemptedSubmit(false)
              setForm({ name: '', email: '', phone: '', topic: '', message: '', privacy: false })
            }}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border-2 border-stone-900 bg-stone-950 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-stone-800"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Enviar otro mensaje
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_24px_60px_-20px_rgba(28,25,23,0.15)] md:p-10">
      <div className="border-b border-stone-100 pb-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-800">Formulario</p>
        <h2 className="font-display mt-2 text-2xl font-bold text-stone-950 md:text-3xl">Cuéntanos qué necesitas</h2>
        <p className="mt-3 max-w-xl text-sm text-stone-600">
          Los campos marcados son obligatorios. Elige un motivo para encaminar tu mensaje al equipo adecuado.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8" aria-label="Formulario de contacto" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
              Nombre <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre y apellidos"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.es"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
            Teléfono <span className="text-stone-400">(opcional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+34 …"
            className={inputClass}
          />
        </div>

        <fieldset>
          <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-stone-500">
            Motivo <span className="text-red-600">*</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {topics.map((t) => {
              const selected = form.topic === t.id
              return (
                <label
                  key={t.id}
                  className={`relative flex cursor-pointer flex-col rounded-2xl border-2 p-4 transition ${
                    selected
                      ? 'border-orange-700 bg-orange-50/90 ring-2 ring-orange-600/20'
                      : 'border-stone-200 bg-[#faf8f4] hover:border-stone-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="topic"
                    value={t.id}
                    checked={selected}
                    onChange={() => setForm((f) => ({ ...f, topic: t.id }))}
                    className="sr-only"
                  />
                  <span className="font-display text-sm font-bold text-stone-900">{t.title}</span>
                  <span className="mt-1 text-xs text-stone-500">{t.hint}</span>
                  {selected && (
                    <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-700 text-[10px] font-bold text-white">
                      ✓
                    </span>
                  )}
                </label>
              )
            })}
          </div>
          {attemptedSubmit && form.topic === '' && (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-amber-800" role="alert">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Selecciona un motivo para continuar.
            </p>
          )}
        </fieldset>

        <div>
          <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
            Mensaje <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Escribe el detalle: enlace de la ficha, qué dato falla, o tu propuesta."
            className={`resize-y min-h-[160px] ${inputClass}`}
          />
          <p className="mt-2 text-xs text-stone-400">Mínimo recomendado: una frase con contexto y, si aplica, URL de la ficha.</p>
        </div>

        <label className="flex cursor-pointer gap-3 rounded-2xl border border-stone-200 bg-[#faf8f4] p-4 transition hover:bg-white">
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
            className="mt-1 h-4 w-4 shrink-0 rounded border-stone-400 text-orange-700 focus:ring-orange-600"
            required
          />
          <span className="text-sm leading-snug text-stone-700">
            He leído y acepto la{' '}
            <Link href="/privacidad" className="font-bold text-orange-900 underline underline-offset-2">
              política de privacidad
            </Link>
            . <span className="text-red-600">*</span>
          </span>
        </label>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-950 py-4 text-sm font-bold text-white shadow-lg shadow-stone-900/25 transition hover:bg-stone-800"
        >
          <Send className="h-5 w-5" aria-hidden />
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}
