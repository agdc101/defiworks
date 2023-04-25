<?php

namespace App\Form;

use App\Entity\Deposits;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddPendingDepositType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('user_id', HiddenType::class)
            ->add('user_email', HiddenType::class)
            ->add('gbp_amount', HiddenType::class)
            ->add('usd_amount', HiddenType::class)
            ->add('timestamp', HiddenType::class)
            ->add('is_verified', HiddenType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Deposits::class,
        ]);
    }
}
