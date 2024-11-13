import React, { useState } from 'react';
import {
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Briefcase,
} from 'lucide-react';

const experiences = [
  {
    solution: 'Worldline - Solution Contact',
    period: '2022 - Présent',
    role: 'Lead DevOps & Backend Engineer',
    clients: [
      {
        name: 'BGL',
        period: '02/2022 - Présent',
        context:
          "Dans le cadre du projet de développement de la solution Contact-BGL, j'ai contribué à la mise en place d'une architecture robuste et évolutive sur OpenShift, tout en automatisant les déploiements et en développant des microservices. Voici un aperçu de mes missions principales :",
        achievements: [
          'Déploiement de la solution Contact-Produit sur OpenShift en collaboration avec le support produit',
          'Automatisation du processus de déploiement via GitLab-CI et Helm',
          'Conception et développement d’un microservice en Spring Boot consommant des messages JSON depuis Kafka pour l’envoi de notifications SMS via une API tierce, garantissant robustesse et fiabilité',
          'Développement d’un microservice en Spring Boot pour l’analyse des événements d’activité des agents à partir des messages Kafka, avec stockage en base de données pour la génération de rapports',
          'Analyse, conception et développement de services personnalisés pour le client, incluant des API REST et services de reporting, ainsi que la dockerisation des services avec Docker',
          'Maintenance continue de la solution, incluant corrections de bugs et améliorations',
          'Gestion des montées de version mineures et majeures de la solution Contact-BGL',
          'Coordination avec les équipes techniques du client pour assurer la communication et la résolution des problèmes',
          'Formation des stagiaires et alternants, et organisation d’ateliers de formation pour le client BGL sur la solution Contact',
          'Supervision d’équipe : animation des sprints, daily meetings, et suivi des tâches',
        ],
      },
      {
        name: 'LCL',
        period: '01/2024 - 08/2024',
        context:
          "Dans le cadre du projet de déploiement de la solution Contact-LCL, j'ai participé à la gestion de l'équipe pour assurer la qualité des livrables tout en développant des services personnalisés et en déployant la solution sur OpenShift. Voici un aperçu de mes missions principales :",
        achievements: [
          'Participation au pilotage de l’équipe pour garantir la qualité des livrables : organisation des sprints, création de tâches sur JIRA, revue de code et revue technique',
          'Déploiement de la solution Contact-LCL sur OpenShift',
          'Conception, développement et livraison de services personnalisés pour le client, utilisant Spring Boot, Angular, Maven, Kafka, Node.js, Docker, et Helm',
          'Implémentation d’un service de reconnaissance vocale avec Nuance, développé en Spring Boot, Maven, et Docker, déployé et conforme aux exigences spécifiques du client',
          'Gestion des montées de version mineures et majeures de la solution Contact-LCL',
        ],
      },
      {
        name: 'BNL',
        period: '05/2024 - 06/2024',
        context:
          "Dans le cadre de l'optimisation des workflows de déploiement et de la migration de l'application Contact Legacy, j'ai contribué à améliorer les pipelines CI/CD et les processus de conteneurisation, tout en pilotant la migration vers un environnement OpenShift. Voici un aperçu de mes missions principales :",
        achievements: [
          'Optimisation et amélioration des pipelines GitLab-CI et des Dockerfiles',
          'Amélioration des processus de dockerisation des services personnalisés, incluant Dockerfile et GitLab-CI',
          'Pilotage de la migration de l’ancienne version de Contact Legacy vers un environnement OpenShift en utilisant Docker, Helm, Terraform, Ansible, et GitLab-CI',
          'Réalisation des montées de version mineures de la solution Contact-BNL',
        ],
      },
      {
        name: 'CARDIF',
        period: '08/2024 - 10/2024',
        context:
          "Dans le cadre de la gestion d'infrastructure serveur pour les bases de données et Elasticsearch, j’ai assuré le déploiement et la gestion de machines virtuelles sur OpenStack, ainsi que l’automatisation et le monitoring des ressources pour une administration optimisée. Voici un aperçu de mes missions principales:",
        achievements: [
          'Déploiement et gestion de machines virtuelles sur OpenStack à l’aide de Terraform pour la gestion des ressources et instances, avec des playbooks Ansible pour appliquer les configurations sur ces instances',
          'Création et maintenance de rôles Ansible pour l’installation et la configuration de services sur les machines virtuelles OpenStack',
          'Automatisation de la gestion des ressources OpenStack (réseaux, volumes de stockage, instances) avec Ansible pour optimiser le provisioning et l’administration',
          'Suivi et résolution des problèmes d’infrastructure dans l’environnement OpenStack en utilisant des outils de monitoring tels que Prometheus et Grafana',
        ],
      },
    ],
  },
  {
    solution: 'Worldline - Solution SmartPush',
    period: '2019 - 2022',
    role: "Ingénieur d'Étude et Développement",
    context:
      'Dans le cadre de l’amélioration de la solution SmartPush pour l’envoi massif de SMS, e-mails et appels, j’ai contribué à la migration vers OpenShift, à la modernisation technologique, et au développement de services sécurisés. Voici un aperçu de mes principales missions:',
    achievements: [
      'Migration vers OpenShift, incluant la conteneurisation de tous les services et la création de templates Helm',
      'Développement d’un service d’authentification SAML 2.0 avec Spring Security',
      'Migration vers des versions plus récentes de Java, Spring, Elasticsearch, et Angular',
      'Conception, développement et livraison de services et API REST, incluant des fonctionnalités de reporting et d’authentification, avec Angular et Java (Spring Boot, Spring Batch, Spring Security, Hibernate)',
    ],
  },
];

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      id="experience"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Expériences professionnelles
          </h2>
        </div>

        <div
          className={`space-y-12 transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-full' : 'max-h-[600px] overflow-hidden'
          }`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-20" />

              <div className="flex items-center gap-6 mb-8">
                <div className="bg-blue-600 rounded-lg p-3 shadow-lg shadow-blue-200">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.solution}
                  </h3>
                  <div className="flex items-center text-gray-600 mt-2">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <h4 className="inline-block text-lg font-semibold text-blue-600 mb-6 px-4 py-1 bg-blue-50 rounded-full">
                  {exp.role}
                </h4>

                {exp.clients ? (
                  <div className="space-y-6">
                    {exp.clients.map((client, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-blue-200 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h5 className="text-xl font-bold text-gray-900">
                            Client {client.name}
                          </h5>
                          <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200">
                            {client.period}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <h5 className="text-gray-700 flex">
                            {client.context}
                          </h5>
                        </div>
                        <div className="space-y-3">
                          {client.achievements.map((achievement, aidx) => (
                            <p
                              key={aidx}
                              className="text-gray-700 flex items-start"
                            >
                              <span className="mr-3 text-blue-600 text-lg">
                                •
                              </span>
                              {achievement}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-gray-700 flex">{exp.context}</p>
                    </div>
                    {exp.achievements.map((achievement, idx) => (
                      <p key={idx} className="text-gray-700 flex items-start">
                        <span className="mr-3 text-blue-600 text-lg">•</span>
                        {achievement}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-blue-200"
          >
            {isExpanded ? (
              <>
                Voir moins
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                Voir plus
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
