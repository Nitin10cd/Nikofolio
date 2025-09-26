"use client";

import { useParams } from "next/navigation";
import projects from "../../../api/details.js";
import { PlayCircle, Github } from "lucide-react";

export default function ProjectPage() {
  const params = useParams();
  const projectName = params.profilename;

  const project = projects.find(
    (p) => p.title.replace(/\s+/g, "-").toLowerCase() === projectName.toLowerCase()
  );

  if (!project) return <p className="p-6 text-red-600">Project not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        {project.title}
      </h1>
      <p className="text-sm text-gray-500 mb-6">Version {project.version}</p>

      {/* Logo Section */}
      <div className="flex items-center justify-center h-40 mb-6 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 shadow-inner">
        <span
          className="text-6xl font-bold"
          style={{
            WebkitTextStroke: `2px ${project.theme.accent}`,
            color: "transparent",
          }}
        >
          {project.logoText}
        </span>
      </div>

      {/* Details */}
      <p className="text-gray-700 leading-relaxed mb-6">{project.details}</p>

      {/* Features */}
      {project.features?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Goals */}
      {project.goals?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Goals</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.goals.map((g, idx) => (
              <li key={idx}>{g}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((s, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-full text-white shadow-md"
              style={{ backgroundColor: project.theme.accent }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Extra Info */}
      <div className="mb-6 text-sm text-gray-600">
        <p>Completion Date: {project.completionDate}</p>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            <PlayCircle size={18} /> Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            <Github size={18} /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}
