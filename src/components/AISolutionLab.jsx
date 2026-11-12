import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { aiBlueprints } from '../data/portfolioData';
import { Link } from './Router';

const NODE_ICONS = [Zap, Cpu, ShieldCheck, CheckCircle2];

/**
 * Renders the interactive AI & Systems Blueprint Explorer (`#ai-lab`).
 * Visitors switch across four architecture tracks and inspect each clickable pipeline
 * stage (`Input -> AI/Engine -> Human Checkpoint -> Output`) before scoping a project.
 *
 * @returns {React.ReactElement} Interactive AI solution lab section.
 */
export default function AISolutionLab() {
  const [activeTrackId, setActiveTrackId] = useState(aiBlueprints[0].id);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  const activeBlueprint =
    aiBlueprints.find((track) => track.id === activeTrackId) || aiBlueprints[0];
  const activeNode = activeBlueprint.nodes[activeNodeIndex] || activeBlueprint.nodes[0];

  /**
   * Switches the active architecture track and resets node inspection to stage 01
   * so users always start reading from the trigger stage.
   *
   * @param {string} trackId - Selected blueprint identifier.
   * @returns {void}
   */
  const handleSelectTrack = (trackId) => {
    setActiveTrackId(trackId);
    setActiveNodeIndex(0);
  };

  return (
    <section className="ai-lab wrap" id="ai-lab" aria-labelledby="ai-lab-heading">
      <div className="ai-lab-header">
        <div>
          <div className="eyebrow">
            01 · Interactive Architecture Lab <span className="eyebrow-line" />
          </div>
          <h2 id="ai-lab-heading">
            How I architect <em>AI &amp; software</em> systems.
          </h2>
        </div>
        <p>
          Select a solution track and click any stage in the pipeline to inspect how inputs, models,
          human guardrails, and production outputs fit together.
        </p>
      </div>

      <div className="ai-lab-tabs" role="tablist" aria-label="Architecture blueprint tracks">
        {aiBlueprints.map((track) => {
          const isSelected = track.id === activeBlueprint.id;
          return (
            <button
              key={track.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={isSelected ? 'ai-tab is-active' : 'ai-tab'}
              onClick={() => handleSelectTrack(track.id)}
            >
              <span>{track.index}</span>
              <strong>{track.tabLabel}</strong>
            </button>
          );
        })}
      </div>

      <div className="ai-lab-body" role="tabpanel">
        <div className="ai-lab-track-summary">
          <h3>{activeBlueprint.title}</h3>
          <p>{activeBlueprint.subtitle}</p>
        </div>

        <div className="ai-pipeline" role="group" aria-label="System pipeline stages">
          {activeBlueprint.nodes.map((node, index) => {
            const Icon = NODE_ICONS[index] || Cpu;
            const isActive = index === activeNodeIndex;
            return (
              <button
                key={`${activeBlueprint.id}-${node.step}`}
                type="button"
                className={isActive ? 'ai-node is-active' : 'ai-node'}
                aria-pressed={isActive}
                onClick={() => setActiveNodeIndex(index)}
              >
                <div className="ai-node-top">
                  <span>{node.step}</span>
                  <Icon size={16} aria-hidden="true" />
                </div>
                <small>{node.role}</small>
                <strong>{node.title}</strong>
              </button>
            );
          })}
        </div>

        <div className="ai-node-detail" aria-live="polite">
          <div className="ai-node-detail-head">
            <span>
              STAGE {activeNode.step} · {activeNode.role.toUpperCase()}
            </span>
            <strong>{activeNode.title}</strong>
          </div>
          <p className="ai-node-summary">{activeNode.summary}</p>
          <p className="ai-node-copy">{activeNode.detail}</p>
          <div className="ai-node-stack">
            {activeNode.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="ai-lab-footer">
        <div className="ai-lab-impact">
          <span>EXPECTED OUTCOME</span>
          <p>{activeBlueprint.impact}</p>
        </div>
        <Link
          className="button button-dark cta-primary"
          to={`/contact?topic=${activeBlueprint.topic}`}
        >
          Scope this solution <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
