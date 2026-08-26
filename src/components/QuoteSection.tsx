import React, { useState } from 'react';
import { 
  Upload, 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Send, 
  FileText, 
  Phone,
  AlertTriangle,
  Image as ImageIcon
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteSectionProps {
  prefillEquipment?: string;
  isStandalonePage?: boolean;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  prefillEquipment = '',
  isStandalonePage = false
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    equipmentType: prefillEquipment || 'Industrial Pump',
    modelPartNumber: '',
    descriptionOfRepair: '',
    urgency: 'standard',
    location: 'Houston / Gulf Coast Area',
    uploadedFiles: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const equipmentOptions = [
    'Industrial Pump',
    'Gearbox / Speed Reducer',
    'Rotary Lobe Blower',
    'Rotary Airlock Feeder',
    'Extruder Screw / Barrel',
    'Industrial Mixer / Agitator',
    'Drive Shaft / Spindle',
    'Shredder / Grinder Rotor',
    'Hydraulic Cylinder',
    'CNC Custom Machining',
    'Dynamic Balancing Only',
    'Thermal Metal Spray',
    'Other Rotating Equipment'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files: File[] = Array.from(e.target.files);
      const newFiles = files.map((file: File) => ({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        previewUrl: URL.createObjectURL(file)
      }));
      setFormData((prev) => ({
        ...prev,
        uploadedFiles: [...prev.uploadedFiles, ...newFiles]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index)
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files: File[] = Array.from(e.dataTransfer.files);
      const newFiles = files.map((file: File) => ({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        previewUrl: URL.createObjectURL(file)
      }));
      setFormData((prev) => ({
        ...prev,
        uploadedFiles: [...prev.uploadedFiles, ...newFiles]
      }));
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      access_key:'c1b52441-f7af-4f2f-9a26-7327c1bbc2de',
      subject: 'New Prime Pump & Gear Quote Request',
      from_name: 'Prime Pump & Gear Website',
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      equipment: formData.equipmentType,
      model_part_number: formData.modelPartNumber,
      description_of_repair: formData.descriptionOfRepair,
      urgency: formData.urgency,
      location: formData.location
    })
  });

  const data = await response.json();

  if (data.success) {
    setIsSubmitting(false);
    setIsSubmitted(true);
    const randomId = 'PPG-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationNumber(randomId);
  } else {
    setIsSubmitting(false);
    alert('Unable to send quote request. Please try again.');
  }
};
  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      equipmentType: 'Industrial Pump',
      modelPartNumber: '',
      descriptionOfRepair: '',
      urgency: 'standard',
      location: 'Houston / Gulf Coast Area',
      uploadedFiles: []
    });
  };

  return (
    <section className={`py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800 ${isStandalonePage ? 'pt-28' : ''}`} id="quote-section">
      {/* Background Navy / Red Atmospheric Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-800/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-red-900/60 border border-red-600/60 text-red-300 px-3.5 py-1 rounded text-xs font-black uppercase tracking-widest mb-3">
            <span>FAST RESPONSE ESTIMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight uppercase">
            NEED EQUIPMENT REPAIRED?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Send us the equipment information, photos, model number, or part number and we’ll help determine the best repair solution.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            /* Success Card */
            <div className="bg-slate-900 border-2 border-red-500 rounded-2xl p-8 sm:p-12 text-center shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto text-white shadow-xl shadow-red-700/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-widest text-red-400 block mb-1">
                  REPAIR REQUEST RECEIVED
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white uppercase">
                  THANK YOU, {formData.name.toUpperCase() || 'VALUED CLIENT'}!
                </h3>
                <p className="text-slate-300 text-sm max-w-lg mx-auto mt-2">
                  Our Missouri City rotating equipment engineering team is reviewing your repair specifications and photo attachments. We will contact you shortly.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 inline-block text-left max-w-md w-full">
                <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span>Tracking Reference ID:</span>
                  <span className="font-mono font-bold text-red-400">{confirmationNumber}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 pt-2">
                  <span>Equipment:</span>
                  <span className="font-bold text-white">{formData.equipmentType}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 pt-1">
                  <span>Urgency:</span>
                  <span className="font-bold text-red-400 uppercase">{formData.urgency}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase px-6 py-3 rounded flex items-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call Us: {COMPANY_INFO.phone}</span>
                </a>
                <button
                  onClick={resetForm}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-6 py-3 rounded shadow-md"
                >
                  SUBMIT ANOTHER REQUEST
                </button>
              </div>
            </div>
          ) : (
            /* Active Quote Request Form */
            <form 
              onSubmit={handleSubmit}
              className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8"
              id="repair-quote-form"
            >
              {/* Urgency Selector Header */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-white block uppercase tracking-wide">
                    Select Repair Urgency:
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Tell us how soon you need this equipment operational.
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'standard', label: 'Standard', desc: '5–7 Days' },
                    { id: 'rush', label: 'Rush', desc: '48–72 Hrs' },
                    { id: 'emergency', label: '24/7 Hot Job', desc: 'Immediate' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, urgency: u.id as any }))}
                      className={`px-3 py-2 rounded text-left transition-all border text-xs ${
                        formData.urgency === u.id
                          ? 'bg-red-600 text-white border-red-500 font-bold shadow-md'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span className="block font-bold">{u.label}</span>
                      <span className="text-[10px] opacity-80">{u.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block" htmlFor="quote-name">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Company */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block" htmlFor="quote-company">
                    Company / Facility <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-company"
                    name="company"
                    type="text"
                    required
                    placeholder="e.g. Gulf Coast Chemical Plant #4"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block" htmlFor="quote-phone">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. (713) 555-0199"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block" htmlFor="quote-email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. jmiller@plantcorp.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Equipment Type Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block" htmlFor="quote-equipment-type">
                    Equipment Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="quote-equipment-type"
                    name="equipmentType"
                    value={formData.equipmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    {equipmentOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Model / Part Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block" htmlFor="quote-model">
                    Model / Part Number (If Known)
                  </label>
                  <input
                    id="quote-model"
                    name="modelPartNumber"
                    type="text"
                    placeholder="e.g. Goulds 3196, Falk 2070Y2, Roots 615"
                    value={formData.modelPartNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Description of Repair */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block" htmlFor="quote-description">
                  Description of Repair or Failure Symptoms <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="quote-description"
                  name="descriptionOfRepair"
                  required
                  rows={4}
                  placeholder="Describe failure symptoms (e.g. vibration, bearing seized, scored shaft journal, oil leak, impeller cavitation, reverse engineering needed)..."
                  value={formData.descriptionOfRepair}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Upload Photos Section */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Upload Photos / Nameplate Data / Drawings
                </label>

                {/* Drag and Drop Zone */}
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                    dragActive
                      ? 'border-red-500 bg-red-950/20'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <Upload className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">
                    Drag and drop photos or nameplate images here
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Supports JPG, PNG, PDF, STEP up to 25MB each
                  </p>

                  <div className="mt-4">
                    <label 
                      htmlFor="photo-upload-input"
                      className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase px-4 py-2 rounded cursor-pointer border border-slate-700 transition-colors"
                    >
                      BROWSE FILES
                    </label>
                    <input
                      id="photo-upload-input"
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Uploaded Files Preview List */}
                {formData.uploadedFiles.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {formData.uploadedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <ImageIcon className="w-4 h-4 text-red-500 shrink-0" />
                          <div className="truncate">
                            <span className="text-white font-semibold block truncate">{file.name}</span>
                            <span className="text-[10px] text-slate-500">{file.size}</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-slate-500 hover:text-red-400 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span>Confidential &amp; Secure • Fast Quotation Response</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="quote-submit-btn"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-50 text-white font-black text-sm tracking-wider uppercase px-8 py-4 rounded-lg shadow-2xl shadow-red-700/40 transition-all flex items-center justify-center gap-3 border border-red-500"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>SUBMITTING REQUEST...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT REQUEST</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
