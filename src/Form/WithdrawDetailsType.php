<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class WithdrawDetailsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('sort_code', TextType::class, [
                'label' => 'Sort Code',
                'attr' => [
                    'placeholder' => '00-00-00'
                ],
                 'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a sort code',
                    ]),
                    new Length([
                        'min' => 8,
                        'minMessage' => 'Your sort code should be {{ limit }} characters long, including hyphens',
                        // max length allowed by Symfony for security reasons
                        'max' => 8,
                    ]),
                ],
            ])
            ->add('account_number', TextType::class, [
                'label' => 'Account Number',
                'attr' => [
                    'placeholder' => '0123456789'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter an account number',
                    ]),
                    new Length([
                        'min' => 9,
                        'minMessage' => 'Your account number should be {{ limit }} characters long',
                        // max length allowed by Symfony for security reasons
                        'max' => 9,
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
