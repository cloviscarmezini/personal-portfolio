import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { validateEmail } from '../utils/functions'

import { send } from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const emailJsKeys = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY
}

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(form => ({
      ...form,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (form.name.length < 2) return false;
    if (!validateEmail(form.email.trim())) return false;
    if (!form.message) return false;

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast(t('contact.allFieldsRequired'), {
        icon: '😅',
      });

      return false;
    };

    try {
      setIsLoading(true);

      const notification = toast.loading(t('contact.loading'));

      await send(
        emailJsKeys.serviceId,
        emailJsKeys.templateId,
        {
          from_name: form.name,
          to_name: "Clovis Carmezini",
          from_email: form.email.trim(),
          to_email: "cloviscarmezini14@gmail.com",
          message: form.message
        },
        emailJsKeys.publicKey
      );

      setForm({
        name: '',
        email: '',
        message: ''
      });

      toast.success(t('contact.success'), {
        id: notification
      });

    } catch (error) {
      toast.error(t('contact.error'), {
        id: notification
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div className="flex-[0.75] rounded-2xl p-[1px] focus-within:shadow-card focus-within:bg-gradient-to-b from-blue-500 to-purple-500">
        <div
          role="form"
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="bg-tertiary p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>{t('contact.subtitle')}</p>
          <h3 className={styles.sectionHeadText}>{t('contact.title')}<span className="text-blue-500">.</span></h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium mb-4">
                {t('contact.yourName')}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                className="bg-quarter py-4 px-6
                placeholder:text-neutral-400 text-white rounded-lg
                  border-none font-medium focus:outline-blue-500"
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium mb-4">
                {t('contact.yourEmail')}
              </span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.emailPlaceholder')}
                className="bg-quarter py-4 px-6
                placeholder:text-neutral-400 text-white rounded-lg
                  border-none font-medium focus:outline-blue-500"
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium mb-4">
                {t('contact.yourMessage')}
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                className="bg-quarter py-4 px-6
                placeholder:text-neutral-400 text-white rounded-lg
                  border-none font-medium focus:outline-blue-500 resize-none"
              />
            </label>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-quarter py-3 px-8 w-fit
                text-white font-bold rounded-xl outline-none focus:outline-blue-500"
            >
              {isLoading ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')