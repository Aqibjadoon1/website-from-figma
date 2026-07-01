import { useState, useCallback } from 'react'

export default function useForm(initialValues = {}, validationRules = {}) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    setValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }, [errors])

  const validate = useCallback(() => {
    const newErrors = {}
    for (const [field, rules] of Object.entries(validationRules)) {
      if (rules.required && !values[field]?.trim()) newErrors[field] = rules.message || `${field} is required`
      if (rules.minLength && values[field]?.length < rules.minLength) newErrors[field] = rules.minMessage || `Minimum ${rules.minLength} characters`
      if (rules.pattern && !rules.pattern.test(values[field])) newErrors[field] = rules.patternMessage || 'Invalid format'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [values, validationRules])

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    e?.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try { await onSubmit(values) } catch (err) { setErrors(prev => ({ ...prev, form: err.message })) }
    finally { setSubmitting(false) }
  }, [values, validate])

  const reset = useCallback(() => { setValues(initialValues); setErrors({}); setSubmitting(false) }, [initialValues])

  return { values, errors, submitting, handleChange, handleSubmit, reset, setValues, setErrors }
}
