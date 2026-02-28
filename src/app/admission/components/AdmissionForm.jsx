"use client"
import React, { useRef, useState } from "react";
import "./admissionForm.css";

export default function AdmissionForm() {
  const [values, setValues] = useState({
    studentName: "",
    dob: "",
    parentName: "",
    address: "",
    email: "",
    phone: "",
    previousSchool: "",
    applyingFor: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);
  const printableRef = useRef(null);

  function onChange(e) {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!values.studentName || !values.parentName || !values.email) {
      alert("Please fill at least Student name, Parent name and Email.");
      return;
    }

    try {
      setLoading(true);
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const node = printableRef.current;
      if (!node) throw new Error("Printable area not found");

      // ensure printable area visible for capture
      node.style.display = "block";

      const canvas = await html2canvas(node, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const dpi = 96 * (window.devicePixelRatio || 1);
      const imgWidthMm = (canvas.width * 25.4) / dpi;
      const imgHeightMm = (canvas.height * 25.4) / dpi;

      const margin = 12;
      const maxWidth = pageWidth - margin * 2;
      let renderWidth = maxWidth;
      let renderHeight = (imgHeightMm * renderWidth) / imgWidthMm;

      if (renderHeight > pageHeight - margin * 2) {
        renderHeight = pageHeight - margin * 2;
        renderWidth = (imgWidthMm * renderHeight) / imgHeightMm;
      }

      const x = (pageWidth - renderWidth) / 2;
      const y = margin;

      pdf.addImage(imgData, "PNG", x, y, renderWidth, renderHeight, undefined, "FAST");

      // fixed filename as requested
      const filename = "delben_admission_form.pdf";
      pdf.save(filename);
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF. See console for details.");
    } finally {
      if (printableRef.current) printableRef.current.style.display = "none";
      setLoading(false);
    }
  }

  return (
    <div id="admission-form" className="admission-form-wrap">
      <form className="admission-form" onSubmit={handleSubmit}>
        <h3>Admission Form</h3>

        <div className="row">
          <label>
            Student Name
            <input name="studentName" value={values.studentName} onChange={onChange} required />
          </label>

          <label>
            Date of Birth
            <input name="dob" type="date" value={values.dob} onChange={onChange} />
          </label>
        </div>

        <div className="row">
          <label>
            Parent / Guardian Name
            <input name="parentName" value={values.parentName} onChange={onChange} required />
          </label>

          <label>
            Phone
            <input name="phone" value={values.phone} onChange={onChange} />
          </label>
        </div>

        <div className="row">
          <label>
            Email
            <input name="email" type="email" value={values.email} onChange={onChange} required />
          </label>

          <label>
            Applying For (class)
            <input name="applyingFor" value={values.applyingFor} onChange={onChange} />
          </label>
        </div>

        <label>
          Address
          <input name="address" value={values.address} onChange={onChange} />
        </label>

        <label>
          Previous School
          <input name="previousSchool" value={values.previousSchool} onChange={onChange} />
        </label>

        <label>
          Additional Comments
          <textarea name="comments" value={values.comments} onChange={onChange} rows="4" />
        </label>

        <div className="form-actions">
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Generating PDF…" : "Submit & Download PDF"}
          </button>
        </div>
      </form>

      {/* printable area (hidden). html2canvas will capture this. */}
      <div className="printable" ref={printableRef} style={{ display: "none" }}>
        <div className="pdf-card" role="document" aria-label="Admission PDF">
          <div className="pdf-header">
            {/* ensure logo included */}
            <img src="/logo.png" alt="Delben Schools logo" />
            <div className="pdf-title">
              <h2>Delben Schools - Admission Form</h2>
              <div>Admissions Office</div>
            </div>
          </div>

          <hr />

          <div className="pdf-body">
            {/* ...existing fields rendering ... */}
            <div className="field"><span className="label">Student Name:</span><span>{values.studentName}</span></div>
            <div className="field"><span className="label">Date of Birth:</span><span>{values.dob}</span></div>
            <div className="field"><span className="label">Parent / Guardian:</span><span>{values.parentName}</span></div>
            <div className="field"><span className="label">Phone:</span><span>{values.phone}</span></div>
            <div className="field"><span className="label">Email:</span><span>{values.email}</span></div>
            <div className="field"><span className="label">Applying For:</span><span>{values.applyingFor}</span></div>
            <div className="field full"><span className="label">Address:</span><span>{values.address}</span></div>
            <div className="field full"><span className="label">Previous School:</span><span>{values.previousSchool}</span></div>
            <div className="field full"><span className="label">Comments:</span><span>{values.comments}</span></div>
          </div>

          <hr />

          <div className="pdf-footer">
            <small>Generated on {new Date().toLocaleString()}</small>
          </div>
        </div>
      </div>
    </div>
  );
}