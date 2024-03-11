<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240307093146 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE strategy_apy ADD week_avg DOUBLE PRECISION DEFAULT NULL, ADD month_avg DOUBLE PRECISION DEFAULT NULL, CHANGE month3_avg month3_avg DOUBLE PRECISION NOT NULL, CHANGE month6_avg month6_avg DOUBLE PRECISION NOT NULL, CHANGE year1_avg year1_avg DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE strategy_apy DROP week_avg, DROP month_avg, CHANGE month3_avg month3_avg DOUBLE PRECISION DEFAULT NULL, CHANGE month6_avg month6_avg DOUBLE PRECISION DEFAULT NULL, CHANGE year1_avg year1_avg DOUBLE PRECISION DEFAULT NULL');
    }
}
