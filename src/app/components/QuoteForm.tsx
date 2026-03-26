import { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log("Quote request submitted:", formData);
    
    // In a real application, this would send data to quotes@bladeandbloom.com
    // For now, we'll just show a success message
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#A3BFA8] flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-[#1F4D3B]" />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl mb-4 text-[#1F4D3B]">
          Thanks! We'll contact you shortly.
        </h3>
        <p className="text-[#2A2A2A]/70">
          We've received your quote request and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
      <h3 className="text-2xl md:text-3xl mb-2 text-[#1F4D3B]">
        Request a Free Quote
      </h3>
      <p className="text-[#2A2A2A]/70 mb-8">
        Fill out the form below and we'll get back to you with a custom quote for your project.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border-[#A3BFA8]/30 bg-[#F5F2E9] focus:border-[#1F4D3B] focus:ring-[#1F4D3B]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border-[#A3BFA8]/30 bg-[#F5F2E9] focus:border-[#1F4D3B] focus:ring-[#1F4D3B]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="rounded-xl border-[#A3BFA8]/30 bg-[#F5F2E9] focus:border-[#1F4D3B] focus:ring-[#1F4D3B]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Property Address *</Label>
            <Input
              id="address"
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleChange}
              className="rounded-xl border-[#A3BFA8]/30 bg-[#F5F2E9] focus:border-[#1F4D3B] focus:ring-[#1F4D3B]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Needed *</Label>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
            required
          >
            <SelectTrigger className="rounded-xl border-[#A3BFA8]/30 bg-[#F5F2E9] focus:border-[#1F4D3B] focus:ring-[#1F4D3B]">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lawn-care">Lawn Care</SelectItem>
              <SelectItem value="landscaping">Landscaping</SelectItem>
              <SelectItem value="garden-planting">Garden & Planting</SelectItem>
              <SelectItem value="seasonal-maintenance">Seasonal Maintenance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Project Description *</Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="rounded-xl border-[#A3BFA8]/30 bg-[#F5F2E9] focus:border-[#1F4D3B] focus:ring-[#1F4D3B] resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="photos">Upload Photos (Optional)</Label>
          <div className="border-2 border-dashed border-[#A3BFA8]/30 rounded-xl p-8 text-center bg-[#F5F2E9] hover:border-[#1F4D3B]/50 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-[#A3BFA8] mx-auto mb-2" />
            <p className="text-sm text-[#2A2A2A]/70">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-[#2A2A2A]/50 mt-1">
              PNG, JPG up to 10MB
            </p>
            <input
              type="file"
              id="photos"
              name="photos"
              accept="image/*"
              multiple
              className="hidden"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-8 bg-[#1F4D3B] text-[#F5F2E9] rounded-full hover:bg-[#163A2C] transition-all hover:scale-[1.02] shadow-lg"
        >
          Submit Quote Request
        </button>
      </form>
    </div>
  );
}
