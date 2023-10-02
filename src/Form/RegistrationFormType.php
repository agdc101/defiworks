<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void

    {
        $builder
            ->add('title', ChoiceType::class, [
                'choices' => [
                  'Mr' => 'Mr',
                  'Mrs' => 'Mrs',
                  'Miss' => 'Miss'
                ],
            ])
            ->add('firstName', TextType::class, [
                'constraints' => [
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Your first name should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 450,
                    ]),
                    new Regex([
                        'match' => false,
                        'pattern' => '~[0-9]~',
                        'message' => 'The first name you have entered is not valid'
                    ])
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('lastName', TextType::class, [
                'constraints' => [
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Your last name should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 450,
                    ]),
                    new Regex([
                        'match' => false,
                        'pattern' => '~[0-9]~',
                        'message' => 'The last name you have entered is not valid'
                    ])
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('address', TextType::class, [
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Your address should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 450,
                    ]),
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('city', TextType::class, [
                'constraints' => [
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Your city should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 100,
                    ]),
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('postCode', TextType::class,  [
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Your Postcode should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 10,
                    ]),
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('county',TextType::class, [
                'required' => false,
                'constraints' => [
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Your county should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 250,
                    ]),
                    new Regex([
                        'match' => false,
                        'pattern' => '~[0-9]~',
                        'message' => 'The county you have entered is not valid'
                    ])
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('email', EmailType::class, [
                'constraints' => [
                    new Length([
                        'min' => 10,
                        'minMessage' => 'Your email should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 450,
                    ])
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'You should agree to our terms.',
                    ]),
                ],
            ])
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'The password fields must match.',
                'options' => ['attr' => ['class' => 'password-field form-control']],
                'required' => true,
                'first_options'  => ['label' => 'Password'],
                'second_options' => ['label' => 'Confirm Password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            ->add('userPin', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'The pin fields must match.',
                'options' => ['attr' => ['class' => 'pin-field form-control']],
                'required' => true,
                'first_options'  => ['label' => 'Pin'],
                'second_options' => ['label' => 'Confirm Pin'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a pin',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your pin should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 6,
                    ]),
                ],
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
