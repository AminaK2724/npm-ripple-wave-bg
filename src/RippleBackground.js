import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const RippleBackground = ({
  numWaves = 4,
  rippleSize = 1.5,
  backgroundColor = 'transparent',
  waveColor = 'rgba(136, 172, 224, 0.3)',
  zIndex = 0,
  waveSpeed = 800,
}) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')

      const resizeCanvas = () => {
        if (canvas) {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
        }
      }

      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)

      let ripples = []
      const mouse = { x: 0, y: 0 }

      class Ripple {
        constructor(x, y) {
          this.x = x
          this.y = y
          this.radius = 0
          this.alpha = 1
          this.speed = Math.random() * rippleSize + 0.5
          this.dy = -1
          this.gravity = 0.05
        }

        update() {
          this.radius += this.speed
          this.dy += this.gravity
          this.y += this.dy
          this.alpha -= 0.02
        }

        draw() {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(136, 172, 224, ${this.alpha})`
          ctx.lineWidth = 1.5
          ctx.stroke()
          ctx.closePath()
        }
      }

      const drawWaves = () => {
        const waveConfigs = Array.from({ length: numWaves }, (_, i) => ({
          waveHeight: 10 + i * 5,
          frequency: 0.01 + i * 0.005,
          opacity: 0.15 + i * 0.05,
        }))

        waveConfigs.forEach(config => {
          ctx.beginPath()
          for (let x = 0; x <= canvas.width; x += 20) {
            const y = canvas.height / 2 + config.waveHeight * Math.sin(x * config.frequency + Date.now() / waveSpeed)
            ctx.lineTo(x, y)
          }
          ctx.strokeStyle = `rgba(136, 172, 224, ${config.opacity})`
          ctx.lineWidth = 2
          ctx.stroke()
          ctx.closePath()
        })
      }

      canvas.addEventListener('mousemove', e => {
        mouse.x = e.clientX
        mouse.y = e.clientY

        for (let i = 0; i < 2; i++) {
          ripples.push(new Ripple(mouse.x + Math.random() * 5 - 2.5, mouse.y + Math.random() * 5 - 2.5))
        }
      })

      canvas.addEventListener('click', e => {
        ripples.push(new Ripple(e.clientX, e.clientY))
      })

      const animate = () => {
        if (!canvas) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        drawWaves()

        ripples = ripples.filter(ripple => ripple.alpha > 0 && ripple.y < canvas.height)
        ripples.forEach(ripple => {
          ripple.update()
          ripple.draw()
        })

        requestAnimationFrame(animate)
      }

      animate()

      return () => {
        window.removeEventListener('resize', resizeCanvas)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [numWaves, rippleSize, backgroundColor, waveColor, waveSpeed])

  return <canvas className="ripple-background" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex }} />
}

RippleBackground.propTypes = {
  numWaves: PropTypes.number,
  rippleSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  waveColor: PropTypes.string,
  zIndex: PropTypes.number,
  waveSpeed: PropTypes.number,
}

export default RippleBackground
